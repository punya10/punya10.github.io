// ==UserScript==
// @name        uw-fix
// @match       https://apps.uworld.com/courseapp/usmle/v*/testinterface/launchtest/*
// @grant       none
// @version     1.0.7
// @icon        https://www.google.com/s2/favicons?sz=64&domain=uworld.com
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
// @require     https://punya10.github.io/rx/uwfns.js
// @grant       GM_addStyle
// @author      Punya Jain
// @description UWORLD-Anki Cards finder
// @downloadURL https://punya10.github.io/rx/uw-fix.user.js
// @updateURL   https://punya10.github.io/rx/uw-fix.user.js
// ==/UserScript==

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


