class UW {
    alert = false;
    constructor() {
      this.test = "hello";
      this.log(this.test);
    }
    log(...args) {
        console.log(...args);
        if (this.alert) window.alert(args);
    }
    clearSelection(delay = 0) {
        setTimeout(() => {window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()}, delay);
    }
}


class Popup {
    contents = '<--- Your Content Here --->';
    delay = 0;
    timeout = 1000;
    bg = '#0074D9';
    el;
    onShow() {}
    onDone() {}
    onCancel() {}
    collection;

    constructor(collection, args) {
        //this.arguments = arguments;
        this.collection = collection
        this.args = args;
        for (var k in args) {
            this[k] = args[k];
        }

        this.toid = setTimeout(this.create.bind(this), this.delay);
        console.log(this);
    }

    create() {
        this.el = document.createElement("DIALOG");
        this.el.innerHTML = this.contents;
        this.el.style.color = "white";
        this.el.style.background = this.bg;

        document.body.appendChild(this.el);
        
        this.onShow && this.onShow();
        this.el.showModal();
        
        this.el.addEventListener('close', this.close.bind(this));
        setTimeout(this.close.bind(this), this.timeout);
    }

    close() {
        console.log("closing", this)
        this.el.remove();
        this.onDone && this.onDone();
        this.delete();
    }

    cancel() {
        console.log("canceling", this)
        this.toid && clearTimeout(this.toid);
        this.onCancel && this.onCancel();
        this.delete();
    }

    delete() {
        var idx = this.collection.indexOf(this);
        console.log("curridx =",idx,this.toid, this.collection);
        delete this.collection[idx];
        this.collection.splice(idx, 1);
        console.log("curridx =",idx,this.toid, this.collection);
    }
}

class Popups {
    active = [];
    constructor(args) {
        //args.forEach(a => this.create(a));
    }
    create(arg) {
        this.active.push(new Popup(this.active,arg));
    }

    cancelAll() {
        while(this.active.length) {
            this.active[0].cancel()
        }
    }
}


function addcss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
    return s;
}

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



function initHLs(last="highlighter-yellow") {
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
            console.log("Clicked ME correctly",e);
            window.hlbtns.last = hb[hn];
           console.log("clicked",hb[hn],window.hlbtns.last);
            h.click();
          //}
            
        }
        //hb[hn].btn.addEventListener('mouseup', btnFn);
        hb[hn].btn.addEventListener('click', hb[hn].btn.action);
        //hb[hn].btn = btn;
        document.querySelector(lnav).appendChild(hb[hn].btn);
    });
    window.hlbtns = hb;
    window.hlbtns.last = window.hlbtns[last];

  
    document.querySelector("common-content").parentNode.ontouchstart = (e) => window.getSelection().removeAllRanges();
    document.querySelector("common-content").parentNode.ontouchend = (e) => {
      var curStr = window.getSelection().toString();
      if(curStr.length > 0) {
        
        //copyToClipboard(window.getSelection().toString());
        window.hlbtns.last.btn.action(e);
        //document.querySelectorAll("i.fa-circle.fa-stack-1x.fas.highlighter")[0].click();
        setTimeout(() => window.getSelection().removeAllRanges(), 50);
      }
    }

}

function makePopups(qid) {
    window.qpps.cancelAll();
    if (document.querySelector('#explanation-container').hasAttribute("hidden")) { //explaination hidden, so make popups!
        window.qpps.create({contents: "20", delay:  20000, timeout: 691, bg: '#01FF70'});
        window.qpps.create({contents: "40", delay: 40000, timeout: 691, bg: '#FFDC00'});
        window.qpps.create({contents: "60...MOVE ON!", delay: 60000, timeout: 691, bg: '#F012BE'});
    }
}



function fixAnsChoices() {
  //const getAns = (a)=>`${a}: '${[...document.querySelectorAll('[id^="answerhighlight"]')][`${a}`.charCodeAt(0) - 65].textContent}'`;
[...document.querySelectorAll('strong')].filter(c=>c.textContent.startsWith('(Choice')).forEach(c=>{
    console.log(c.textContent);
    var str = c.textContent;
    str.match(/ ([A-Z])/g).forEach(a => {str = str.replace(a, "" + a + ": '" + [...document.querySelectorAll('[id^="answerhighlight"]')][a.charCodeAt(1)-65].textContent + "'")})
    c.textContent = str;    
}
);
}
