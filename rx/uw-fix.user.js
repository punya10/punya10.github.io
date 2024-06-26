// ==UserScript==
// @name        uw-fix
// @match       https://apps.uworld.com/courseapp/usmle/v*/testinterface/launchtest/*
// @grant       none
// @version     1.0.10
// @icon        https://www.google.com/s2/favicons?sz=64&domain=uworld.com
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// @require     https://punya10.github.io/rx/uwfns2.js
// @grant       GM_addStyle
// @author      Punya Jain
// @description UWORLD-Anki Cards finder
// @downloadURL https://punya10.github.io/rx/uw-fix.user.js
// @updateURL   https://punya10.github.io/rx/uw-fix.user.js
// ==/UserScript==
var uw = new UW();
const ANKIURL = 'https://werk.asuscomm.com:8769';
var ppts = [3000, 5000, 8000];

var myStyle = `
dialog { box-shadow: 0 2px 5px rgba(0,0,0,0.3); border: none; border-radius: 10px; opacity: 0.69; }
dialog::backdrop { background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)); animation: fade-in 0.5s; }
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}
.question-content { max-width: 100% !important; }
#first-explanation > p:last-of-type { padding: 1em; font-size: 1.42691em; background-color: #ff007f; text-indent: -1.0em; padding-left: 2.4em; color: yellow; }
/*#first-explanation > p:last-of-type > .textHighlight { color: #0000ff; }*/
.highlighter-pink {
  color: #ff007f !important;
}
.highlight-color-1 { color: #0000ff !important; }
.highlight-color-4 { background-color: #ff007f !important; color: #ffff00 !important; }
.common-content, .left-content, .right-content, .common-content .question-content.split-screen {
    width: unset !important;
}
.left-content {
    flex: 0 0 31%;
}
.right-content {
    flex: 0 0 69%;
}
.common-content {
    flex-direction: column !important;
}
.left-content {
    flex-direction: row !important;
}
.vertical-divider-line, .vertical-divider-line .wide-for-mouse-events {
    width: 100% !important;
    height: 2px !important;
}
`;


//document.querySelector('.common-content').style.width = document.querySelector('.left-content').style.width = document.querySelector('.right-content').style.width = document.querySelector('.common-content .question-content.split-screen').style.width = 'unset'
//document.querySelector('.left-content').style.flex = document.querySelector('.right-content').style.flex = '0 0 50%;'
//document.querySelector('.common-content').style.flexDirection = 'column';
//document.querySelector('.left-content').style.flexDirection = 'row';
//document.querySelector('.vertical-divider-line').style.width = '100%';
//document.querySelector('.vertical-divider-line').style.height = '2px';
//document.querySelector('.vertical-divider-line .wide-for-mouse-events').style.width = '100%';

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

function waitElUnhide(sel) {
    return new Promise(resolve => {
        if (document.querySelector(sel) && !document.querySelector(sel).hasAttribute("hidden")) {
            resolve(document.querySelector(sel));
            return;
        }
        new MutationObserver((mutations, observer) => {
            if (document.querySelector(sel) && !document.querySelector(sel).hasAttribute("hidden")) {
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


function ambossify(auto = false) {
    if (!window.ambossController) {
        var btn = document.querySelector('#AMBOSSIFY') || document.createElement("button");

        if (!document.querySelector('#AMBOSSIFY')) {
            btn.textContent = 'AMBOSSIFY';
            btn.id = "AMBOSSIFY";
            btn.style.marginTop = "1em";
            btn.style.marginBottom = "1em";
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
            document.querySelector(lnav).appendChild(btn);
        }
        if (auto) {
            btn.click();
        }
    } else {
        window.ambossController.ambossifyCard();
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}



function initHLs(last = "highlighter-yellow") {
    function lastHl(color = last) {
        if (!color.startsWith("highlighter-")) {
            color = window.hlbtns.colors[Math.floor(Math.random() * window.hlbtns.colors.length)];
        }
        window.hlbtns.last = window.hlbtns[color];
        window.hlbtns.colors.forEach(c => {
            window.hlbtns[c].btn.style.border = 'none';
        })
        window.hlbtns[color].btn.style.border = '1px solid black';
        window.hlbtns.lastTs = new Date().now();
    }
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


        // hb[hn].btn = document.createElement("div");

        hb[hn].btn = document.createElement("button");
        hb[hn].btn.id = hb[hn].name;
        hb[hn].btn.textContent = hb[hn].short;
        hb[hn].btn.style.backgroundColor = hb[hn].color;
        hb[hn].btn.style.width = '33%';
        hb[hn].btn.action = (e) => {
            //if (hb[hn].btn.contains(e.target)) {
            console.log("Clicked ME correctly", e);
            lastHl(hn);
            //window.hlbtns.last = hb[hn];
            console.log("clicked", hb[hn], window.hlbtns.last);
            h.click();
            //}

        }
        //hb[hn].btn.addEventListener('mouseup', btnFn);
        hb[hn].btn.addEventListener('click', hb[hn].btn.action);
        //hb[hn].btn = btn;
        document.querySelector(lnav).appendChild(hb[hn].btn);
    });
    window.hlbtns = hb;
    window.hlbtns.colors = Object.keys(window.hlbtns).filter(k => k.startsWith("highlighter-"));
    lastHl(last);
    //window.hlbtns.last = window.hlbtns[last];
    

    document.querySelector("common-content").parentNode.ontouchstart = (e) => uw.clearSelection(0);
    document.querySelector("common-content").parentNode.ontouchend = (e) => {
        var curStr = window.getSelection().toString();
        if (curStr.length > 0) {
            if (((new Date().now()) - window.hlbtns.lastTs) > 10000) {
                lastHl('rand');
            }
            //copyToClipboard(window.getSelection().toString());
            window.hlbtns.last.btn.action(e);
            uw.clearSelection(10);
            //document.querySelectorAll("i.fa-circle.fa-stack-1x.fas.highlighter")[0].click();
            //setTimeout(() => window.getSelection().removeAllRanges(), 50);
        }
    }

}

function makePopups(qid) {
    window.qpps.cancelAll();
    if (document.querySelector('#explanation-container').hasAttribute("hidden")) { //explaination hidden, so make popups!
        window.qpps.create({ contents: "20", delay: 20000, timeout: 691, bg: '#01FF70' });
        window.qpps.create({ contents: "40", delay: 40000, timeout: 691, bg: '#FFDC00' });
        window.qpps.create({ contents: "60...MOVE ON!", delay: 60000, timeout: 691, bg: '#F012BE' });
    }
}



function fixAnsChoices() {
    //const getAns = (a)=>`${a}: '${[...document.querySelectorAll('[id^="answerhighlight"]')][`${a}`.charCodeAt(0) - 65].textContent}'`;
    [...document.querySelectorAll('strong')].filter(c => c.textContent.startsWith('(Choice')).forEach(c => {
        console.log(c.textContent);
        var str = c.textContent;
        str.match(/ ([A-Z])/g).forEach(a => { str = str.replace(a, "" + a + ": '" + [...document.querySelectorAll('[id^="answerhighlight"]')][a.charCodeAt(1) - 65].textContent + "'") })
        c.textContent = str;
    });
}


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

//var lnav = "#leftNavigator";
var lnav = "#leftNavigator > .body";


function initSync(auto = false, confirm = false) {
    akx().then(console.log).catch(console.error);
    var btn = document.createElement("button");
    btn.textContent = 'SYNC';
    btn.style.width = "100%";
    btn.style.marginTop = "1em";
    btn.style.marginBottom = "1em";
    btn.onclick = () => {
        let w = window.open('http://192.168.1.127:8766/sync', "_blank");
        setTimeout(() => w.close(), 1000);
    }
    document.querySelector(lnav).appendChild(btn);
    if (auto) {
        btn.click();
    }
    if (confirm) {
        (confirm("Sync?")) ? btn.click() : null;
    }
}


var lastqid = 0;
waitEl('common-content').then(cc => {
    var myCss = addcss(myStyle);


    window.qpps = new Popups();

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

            waitElUnhide('#explanation-container').then(exp => {
                console.log('EXPL showing, exp')
                window.qpps.cancelAll();
                fixAnsChoices();
                ambossify(true);
            });


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


