// ==UserScript==
// @name        uw-fix
// @match       https://apps.uworld.com/courseapp/usmle/v12/testinterface/launchtest/*
// @grant       none
// @version     1.0.3
// @icon        https://www.google.com/s2/favicons?sz=64&domain=uworld.com
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// @grant       GM_addStyle
// @author      Punya Jain
// @description UWORLD-Anki Cards finder
// @downloadURL https://punya10.github.io/rx/uw-fix.user.js
// @updateURL   https://punya10.github.io/rx/uw-fix.user.js
// ==/UserScript==

const ANKIURL = 'https://werk.asuscomm.com:8769';
var ppts = [3000, 5000, 8000];

var myStyle = `
dialog { box-shadow: 0 2px 5px rgba(0,0,0,0.3); border: none; border-radius: 10px; opacity: 0.25; }
dialog::backdrop { background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)); animation: fade-in 0.5s; }
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}
.question-content { max-width: 100% !important; }
#first-explanation > p:last-of-type { padding: 1em; font-size: 1.42691em; background-color: #ff007f; text-indent: -1.0em; padding-left: 2.4em; color: yellow; }
#first-explanation > p:last-of-type > .textHighlight { color: #0000ff; }
`;

function addcss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
    return s;
}


// Perform all promises in the order
const waterfall = function (promises) {
    return promises.reduce(
        function (p, c) {
            // Waiting for `p` completed
            return p.then(function () {
                // and then `c`
                return c().then(function (result) {
                    return true;
                });
            });
        },
        // The initial value passed to the reduce method
        Promise.resolve([])
    );
};

//image crap
function extractAllText(str) {
    const re = /"(.*?)"/g;
    const result = [];
    let current;
    while (current = re.exec(str)) {
        result.push(current.pop());
    }
    return result.length > 0 ?
        result : [str];
}

function getTags(tags) {
    var filters = ["#FirstAid", "#B&B", "#SketchyMicro", "#SketchyPharm", "#SketchyPath", "#OME", "#Pixorize", "#SketchyBiochem", "#AMBOSS"];
    var result = {};
    filters.forEach(f => {
        var found = tags.filter(t => t.includes(f));
        if (found.length > 0) {
            result[f] = found;
        }
    })
    return result;
}

const akx = async (action = 'deckNames', params = {}, version = 6) => await axios.post(ANKIURL, { action, version, params }).then(r => r.data.result).catch(r => r.data.error);

function waitEl(sel) {
    return new Promise(resolve => {
        if (document.querySelector(sel)) {
            resolve(document.querySelector(sel));
            return;
        }
        new MutationObserver((mutations, observer) => {
            if (document.querySelector(sel)) {
                resolve(document.querySelector(sel));
                observer.disconnect();
                observer.takeRecords();
            }
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

function onCharChange(el, cb) {
    if (el) {
        cb(el.textContent.replace(/[^\d]/g, ''));
        //return;
    }
    new MutationObserver((mutations, observer) => {
        cb(el.textContent.replace(/[^\d]/g, ''));
    }).observe(el, {
        subtree: true,
        characterData: true,
        characterDataOldValue: true
    });
}

function onAttrChange(qid, el, filter, cb) {
    if (!el.hasAttribute(filter) && document.querySelector('.question-id').textContent.replace(/[^\d]/g, '') == qid) {
        cb(el);
        return;
    }
    new MutationObserver((mutations, observer) => {
        if (document.querySelector('.question-id').textContent.replace(/[^\d]/g, '') != qid) {
            observer.disconnect();
            observer.takeRecords();
            return;
        }
        if (!el.hasAttribute(filter)) {
            cb(el);
            observer.disconnect();
            observer.takeRecords();
        }
    }).observe(el, {
        attributeFilter: [filter],
        attributeOldValue: true
    });
}

function initSync(auto = false, confirm = false) {
    akx().then(console.log).catch(console.error);
    var btn = document.createElement("button");
    btn.textContent = 'SYNC';
    btn.onclick = () => {
        let w = window.open('http://192.168.1.127:8766/sync', "_blank");
        setTimeout(() => w.close(), 1000);
    }
    document.querySelector("#leftNavigator").appendChild(btn);
    if (auto) {
        btn.click();
    }
    if (confirm) {
        (confirm("Sync?")) ? btn.click() : null;
    }
}

function ambossify(auto = false) {
    if (!window.ambossController) {
        var btn = document.createElement("button");
        btn.textContent = 'AMBOSSIFY';
        btn.onclick = () => {
            if (window.ambossController) {
                window.ambossController.ambossifyCard();
            } else {
                document.querySelector('common-content').id = 'qa';
                var s = document.createElement('script');
                s.type = "module";
                s.setAttribute("data-addon", "eyJhbm9uSWQiOiAiNDM2NmVhYjItZDNmNS00NGQ5LTkxZjUtNjA1YmVjNDg2NTNmIiwgInVzZXJJZCI6ICJDM1BXcWtlbDAiLCAidG9rZW4iOiAiZXlKaGJHY2lPaUpTVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmxlSEFpT2pFMk9ETTBPVEExTWpRc0ltbHpjeUk2SWtGTlFrOVRVeUlzSW5OMVlpSTZJa016VUZkeGEyVnNNQ0lzSW1saGRDSTZNVFk0TURnNU9EVXlOSDAuT0JGUnNHYTVNbFF6TUhDOV9jU2djMFlJaWdHaEV6RnJvUnNVaU1MakNKYUxHLVpmQ1N0QTROSjJEN3VqQWgySE1lbHUyWERDODlXb2xuV2VBdmtoRWFmZlFfcUJiMVNDNmJvN0RGNTFXdmNtOUtCY0JJbVcxQzlyNWtTQUF4MzhPTi1oa3pRaGhLbV84aW92MnRraVotRUpCUUpJcG5JSk5CNVZGVUk2Vzd6azh0MmhyYWlWdTVreDFSeWJxbFRCZmtxcHhlMWN5bHRXR21yT1JvR01qaTRDQ0k3MHd5VWwyWUtLLTFBRGh3NkUwNDNGc1p4TXpQUnEtRkJWdmNaLWk1UkFiVHJLemYwTWItZVhOZ2k0Y0d4WE04WGIwRlI3czBfTG42QWF2QWk0NkpEWVlFSXZUOTdYZm9aeTZoQ3VOM2RxZU1oZnhrTFQ4eWRzNlM4NFNRIn0=");
                s.id = "amboss-snippet";
                s.onload = () => {
                    console.log("AMBOSS LOADED");
                    //setTimeout(() => s.remove(), 1000);
                }
                s.src = "https://content-gateway.us.production.amboss.com/amboss.js";
                document.head.appendChild(s);
            }
        }
        document.querySelector("#leftNavigator").appendChild(btn);
        if (auto) {
            btn.click();
        }
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function initHLs(last = 'highlighter_yellow') {
    var hb = {};
    hb.hls = [...document.querySelectorAll("i.fa-circle.fa-stack-1x.fas.highlighter")];
    hb.hls.forEach(h => {
        var hn = h.classList.value.match(/highlighter-[a-z]*/g)[0];
        hb[hn] = {
            name: hn,
            short: hn.charAt(12),
            el: h,
            color: window.getComputedStyle(h, null).getPropertyValue("color")
        };


        var btn = document.createElement("button");
        btn.id = hb[hn].name;
        btn.textContent = hb[hn].short;
        btn.style.backgroundColor = hb[hn].color;
        btn.onclick = () => {
            window.hlbtns.last = hb[hn];
            h.click();
        }
        hb[hn].btn = btn;
        document.querySelector("#leftNavigator").appendChild(btn);
    });
    window.hlbtns = hb;
    window.hlbtns.last = window.hlbtns[last];

    document.ontouchstart = (e) => window.getSelection().removeAllRanges();
    document.ontouchend = (e) => {
        copyToClipboard(window.getSelection().toString());
        window.hlbtns.last.btn.click();
        //document.querySelectorAll("i.fa-circle.fa-stack-1x.fas.highlighter")[0].click();
        setTimeout(() => window.getSelection().removeAllRanges(), 50);
    }

}


class Popup {
    contents = '';
    delay = 0;
    timeout = 1000;
    bg = '#0074D9';
    el;
    onShow() { }
    onDone() { }
    onCancel() { }

    constructor(args) {
        this.arguments = arguments;
        this.args = args;
        for (var k in args) { this[k] = args[k]; }
        
        this.toid = setTimeout(() => {
            // run pre dialog code
            this.onShow && this.onShow();

            // create & show the dialog
            this.el = document.createElement("DIALOG");
            this.el.innerHTML = this.contents;
            this.el.style.background = this.bg;
            this.el.addEventListener('close', () => {this.close(this.el)});
            document.body.appendChild(this.el);
            this.el.showModal();
            setTimeout(() => {this.close(this.el)}, this.timeout);

        }, this.delay);
        console.log(this);
    }

    close(el) {
        console.log("closing", el)
        el.remove();
        this.onDone && this.onDone();
    }

    cancel() {
        this.toid && clearTimeout(this.toid);
        this.onCancel && this.onCancel();
    }
}



function popup(contents, delay = 1, timeout = 3000, bg = 'white', fnbefore = () => { }, fnafter = () => { }) {
    if (!window.qpps) {
        window.qpps = {};
        window.qpps.active = {};
        window.qpps.cancel = (p) => {
            window.qpps.active[p].toid && clearTimeout(window.qpps.active[p].toid);
            delete window.qpps.active[p];
        };
        window.qpps.cancelAll = () => Object.keys(window.qpps.active).forEach(p => window.qpps.cancel(p));
    }
    const pp = {
        contents: contents,
        delay: delay,
        timeout: timeout,
    };
    const toid = setTimeout(() => {
        fnbefore();
        var d = document.createElement("DIALOG");
        d.innerHTML = contents;
        d.style.background = bg;
        d.addEventListener('close', fnafter);
        document.body.appendChild(d);
        d.showModal();
        setTimeout(() => {

            d.remove();
            fnafter();
        }, timeout);
    }, delay);
    window.qpps.active.push(toid);
}


function makePopups(qid) {

    if (document.querySelector('#explanation-container').hasAttribute("hidden")) { //explaination hidden, so make popups!
        popup("20", 20000, 250, '#01FF70'))
        ,
        popup("40", 40000, 250, '#FFDC00'),
            popup("60...MOVE ON!", 60000, 250, '#F012BE')
        ];
    }
}






var lastqid = 0;
waitEl('common-content').then(cc => {
    var myCss = addcss(myStyle);

    initSync(false, false);
    initHLs();
    ambossify(false);


    waitEl('.question-id').then(qel => {
        onCharChange(qel, async (qid) => {
            //Question Loaded!


            makePopups(qid);
            console.log(qid);

            if (qid != lastqid) {
                //makePopups();
                window.q = await processQuestion();
                lastqid = qid;
            }

            onAttrChange(qid, document.querySelector('#explanation-container'), "hidden", (e) => {
                //Explaination Loaded!
                console.log('[6.oAc]', e);
                //if (window.ambossController) window.ambossController.ambossifyCard();
                //makePopups();
                //if (document.querySelector("span.question-id")) {
                //var curr = document.querySelector("span.question-id").textContent.replace(/[^\d]/g, '');

            })
        })
    });
});


async function processQuestion() {
    const q = {};
    q.id = document.querySelector("span.question-id").textContent.replace(/[^\d]/g, '');
    q.query = `tag:#AK_Step1_v12::#UWorld::${q.id}`;
    q.nids = await akx('findNotes', { "query": q.query });
    q.ninfo = await akx('notesInfo', { "notes": q.nids });
    q.tags = [...new Set(q.ninfo.flatMap(note => note.tags))];
    q.imgs = {};

    async function getImgs(f) {
        var i = [...new Set(q.ninfo.flatMap(note => extractAllText(note.fields[f].value)))].filter(e => e);
        var p = i.map(img => akx('retrieveMediaFile', { "filename": img }));
        return Promise.all(p).then(data => {
            if (data.filter(d => d).length > 0) { q.imgs[f] = [] }
            data.forEach((d, di) => { if (d) { q.imgs[f].push([i[di], `data:image/png;base64,${d}`]) } });
        });
    }

    q.related = getTags(q.tags);
    q.path = Object.fromEntries([...document.querySelectorAll('.standard-header')].map(s => [s.textContent, s.previousSibling.textContent]));
    q.path.id = q.id;
    await getImgs('Sketchy');
    await getImgs('First Aid');
    await getImgs('Pixorize');

    async function addToQueue() {
        var cards = q.ninfo.flatMap(n => n.cards);
        var destination = ['UW', window.location.pathname.replace('/courseapp/usmle/v12/testinterface/launchtest/9300640/', '').split('/')[0]].join('::');
        console.log(destination, cards);
    }

    await addToQueue();

    function show() {
        if (document.querySelector('#ankiInfo')) {
            document.querySelector('#ankiInfo').remove();
        }
        var ankiInfo = document.createElement("div");
        ankiInfo.id = 'ankiInfo';

        q.imgs["First Aid"] && q.imgs["First Aid"].forEach(i => {
            var img = document.createElement("img");
            img.src = i[1];
            img.style.maxWidth = "unset";
            img.style.width = "100%";
            ankiInfo.appendChild(img);
        })
        //document.querySelector(".standards").parentElement.insertBefore(ankiInfo, document.querySelector(".standards"));
        document.querySelector('#first-explanation').appendChild(ankiInfo);
    }

    show();
    console.log(await q);

    //document.querySelector('#first-explanation > p:last-of-type').innerHTML = document.querySelector('#first-explanation > p:last-of-type').innerHTML.replace(/(\.(&nbsp;|\s)*|<br>[\n"]*)/g, '.<br>&#8226; ').replace(/\.<br>&#8226; $/g,'.');
    return await q;
}
