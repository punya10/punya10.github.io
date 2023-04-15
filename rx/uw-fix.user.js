// ==UserScript==
// @name        uw-fix
// @match    https://apps.uworld.com/courseapp/usmle/*
// @grant       none
// @version     1.0
// @author      Punya Jain
// @description UWORLD-Anki Cards finder
// @downloadURL https://punya10.github.io/rx/uw-fix.user.js
// @updateURL https://punya10.github.io/rx/uw-fix.user.js
// ==/UserScript==

const ambossLogo = "data:image/png;base64,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";


async function getAmbossQuestions(notes, title = "PJ Deck") {
  const qids = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://anki-qbank-mapper.us.production.amboss.com/questions"), {
    method: 'POST',
    headers: { "Authorization": "Bearer ambossLoveAnki666", "Content-Type": "application/json" },
    body: JSON.stringify({ "notes": notes, "max_question_count": null, "study_objective": "step-1", "request_origin": "anki_card_browser_toolbar_button" }),
    redirect: 'follow'
  }).then(response => response.json()).then(data => data.questions.map(q => q.id));

  console.log(qids.length, ...qids);
  popup("Found " + qids.length + " amboss questions: " + JSON.stringify(qids), 1000);

  if (qids.length > 0) {
    const eidData = await fetch('https://corsproxy.io/?' + encodeURIComponent("https://content-gateway.us.production.amboss.com"), {
      method: 'POST',
      headers: { "Authorization": "Bearer b14f45fa69c75edb1953f00bc4413332", "Content-Type": "application/json" },
      body: JSON.stringify({
        "query": "mutation AnkiQuestionSession(\n  $title: String!,\n  $questionIds: [ID!]!,\n  $statusCriterion: QuestionStatusCriterion,\n  $difficulties: [Difficulty!],\n  $maxSize: Int,\n  $order: QuestionOrder!\n) {\n  createCustomQuestionSession(\n    title: $title\n    mode: guidance\n    criteria: {\n      questionIds: $questionIds\n      statusCriterion: $statusCriterion\n      difficulties: $difficulties\n      maxSize: $maxSize\n      order: $order\n    }\n  ) {\n    ...on  QuestionSession {\n      eid\n      questionIds\n    }\n  }\n}",
        "operationName": "AnkiQuestionSession",
        "variables": {
          "title": title,
          "questionIds": [...qids],
          "maxSize": qids.length,
          "order": "initial",
          "statusCriterion": { "resultSet": "all", "statuses": ["unseenOrSkipped", "answeredIncorrectly", "answeredCorrectlyWithHelp", "answeredCorrectly"] },
          "difficulties": ["difficulty0", "difficulty1", "difficulty2", "difficulty3", "difficulty4"]
        }
      }),
      redirect: 'follow'
    }).then(response => response.json());

    console.log(eidData, eidData.data.createCustomQuestionSession.eid);
    popup("Found amboss test id: " + JSON.stringify(eidData.data.createCustomQuestionSession.eid), 1000);
    return `https://next.amboss.com/us/questions/${eidData.data.createCustomQuestionSession.eid}/1?utm_source=anki&utm_medium=anki_card_browser_toolbar_button`;
  }
  //window.open(`https://next.amboss.com/us/questions/${eidData.data.createCustomQuestionSession.eid}/1?utm_source=anki&utm_medium=anki_card_browser_toolbar_button`, '_blank');

}

function getHeaders() {
  const creds = JSON.parse(RX_USER_MANAGER._settings._userStore._store["oidc.user:https://account.scholarrx.com:ScholarRx.Client"]);
  const h = {
    "accept": "application/json, text/plain, */*",
    "authorization": `${creds.token_type} ${creds.access_token}`,
    "browseroffset": "-7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Referer": "https://usmle-rx.scholarrx.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
  return h;
}

async function getFA() {
  const index = await fetch("https://api.scholarrx.com/api/v1.0b/Source/USMLE%20Step%201?rapidreview=true", {
    "headers": getHeaders(),
    "body": null,
    "method": "GET",
  }).then(res => res.json()).then(f => f.figures[0]);

  var faTopics = {};
  index.children.forEach(c => {
    var chapter = { ...c };
    delete chapter.children;
    c.children.forEach(s => {
      var subject = { ...s };
      delete subject.children;
      s.children.forEach(t => {
        var topic = { ...t };
        delete topic.children;
        topic.subject = subject;
        topic.chapter = chapter;
        faTopics[topic.id] = topic;
      })
    })
  });
  return faTopics;
}

async function getCards(id, title) {
  const headers = getHeaders();
  const contentKeys = await fetch(`https://api.scholarrx.com/api/v1.0b/Me/Decks/${id}/Resume`, {
    "headers": getHeaders(),
    "body": null,
    "method": "POST"
  }).then(data => data.json()).then(data => data.cards.map(i => i.contentKey));
  console.log(contentKeys);
  popup("Found Keys: " + JSON.stringify(contentKeys), 1000);

  const content = await fetch("https://api.scholarrx.com/api/v1.0b/Cards/Content", {
    "headers": getHeaders(),
    "body": `{"contentKeys":${JSON.stringify(contentKeys)}}`,
    "method": "POST"
  }).then(data => data.json());
  console.log(content);
  popup("Found Content: " + JSON.stringify(content), 1000);

  var notes = [];
  content.forEach(card => notes.push({ "guid": "", "id": 0, "tags": [], "fields": [card.question.text, card.answer.text], "cards": [{ "ivl": 0, "queue": 0, "rev": null }] }));

  const testURL = await getAmbossQuestions(notes, title || `USMLE-Rx deck: ${id}`);

  return testURL;
}

async function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}


const respondToVisibility = function (element, callback) {
  var options = { root: document.documentElement }
  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      callback(entry.intersectionRatio > 0);
    });
  }, options);
  observer.observe(element);
}

function addcss(css) {
  var head = document.getElementsByTagName('head')[0];
  var s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
  return s;
}

var myStyle = `
dialog {
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    border: none;
    border-radius: 10px;
}

dialog::backdrop {
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4));
    animation: fade-in 0.5s;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;


// FUNCTION TO GENERATE POPUPS (3 examples):
//popup("hello there 8", 8000, () => alert("FUCK YEAH!"));
//popup("hello 5", 5000);
//popup("hi 3");
function popup(contents, delay = 1, timeout = 3000, bg = 'white', cb = () => { }) {
  setTimeout(() => {
    var d = document.createElement("DIALOG");
    d.innerHTML = contents;
    d.style.background = bg;
    d.addEventListener('close', cb);
    document.body.appendChild(d);
    d.showModal();
    if (timeout > 0) setTimeout(() => (d.remove() && cb()), timeout);
  }, delay);
}

// safely handles circular references
JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

// Call the below function
//waitForElementToDisplay("#div1",function(){alert("Hi");},1000,9000);
function waitForElementToDisplay(selector, callback, checkFrequencyInMs = 100, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback(document.querySelector(selector));
      return;
    } else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

// Load a script from given `url`
const loadScript = function (url) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = url;

        script.addEventListener('load', function () {
            // The script is loaded completely
            resolve(true);
        });

        document.head.appendChild(script);
    });
};

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

// Load an array of scripts in order
const loadScriptsInOrder = function (arrayOfJs) {
    const promises = arrayOfJs.map(function (url) {
        return loadScript(url);
    });
    return waterfall(promises);
};


//const ANKIURL = 'https://werk.asuscomm.com:8769';

function invoke(action, version, params = {}) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('error', () => reject('failed to issue request'));
    xhr.addEventListener('load', () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (Object.getOwnPropertyNames(response).length != 2) {
          throw 'response has an unexpected number of fields';
        }
        if (!response.hasOwnProperty('error')) {
          throw 'response is missing required error field';
        }
        if (!response.hasOwnProperty('result')) {
          throw 'response is missing required result field';
        }
        if (response.error) {
          throw response.error;
        }
        resolve(response.result);
      } catch (e) {
        reject(e);
      }
    });

    xhr.open('POST', ANKIURL);
    xhr.send(JSON.stringify({
      action,
      version,
      params
    }));
  });
}

function akdo(action = 'deckNames', params = {}, version = 6) {
  return new Promise(async (resolve, reject) => {
      const res = await fetch(ANKIURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              action,
              version,
              params
          })
      });
      const data = await res.json();
      //console.log(data);
      if (!data.error) {
          console.log("ANKIDO: ",JSON.stringify(action, params, data));
          resolve(data.result);
      } else {
          reject(data.error);
      }
  });
}


//import("//cdn.jsdelivr.net/npm/axios/dist/axios.min.js");
//const akx = async (action = 'deckNames', params = {}, version = 6) => await axios.post(ANKIURL, {action, version, params}).then(r => r.data.result).catch(r => r.data.error);


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

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
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



(async function () {
    var ppts = [2000, 5000, 8000];
var lastqid = 0;
const ANKIURL = 'https://werk.asuscomm.com:8769';
import("//cdn.jsdelivr.net/npm/axios/dist/axios.min.js");
const akx = async (action = 'deckNames', params = {}, version = 6) => await axios.post(ANKIURL, {action, version, params}).then(r => r.data.result).catch(r => r.data.error);
akx().then(console.log).catch(console.error)


    var selector = "span.question-id";


  async function processQuestion() {
    document.querySelector('#first-explanation > p:last-of-type').innerHTML = document.querySelector('#first-explanation > p:last-of-type').innerHTML.replace(/(\.(&nbsp;|\s)*|<br>[\n"]*)/g, '.<br>&#8226; ').replace(/\.<br>&#8226; $/g,'.');
        //popup("30", ppts[0], 1000, 'green');
        //popup("45", ppts[1], 1000, 'yellow');
        //popup("60 ... MOVE ON!", ppts[2], 1000, 'red');
       
    
    //document.querySelector(".common-content").style.maxWidth = "unset";
    const q = {};
    q.id = document.querySelector("span.question-id").textContent.replace(/[^\d]/g, '');
    q.query = `tag:#AK_Step1_v12::#UWorld::${q.id}`;
    q.nids = await akx('findNotes', {"query": q.query});
    q.ninfo = await akx('notesInfo', {
      "notes": q.nids
    });
    q.tags = [...new Set(q.ninfo.flatMap(note => note.tags))];
    q.imgs = {};


    async function getImgs(f) {

      var i = [...new Set(q.ninfo.flatMap(note => extractAllText(note.fields[f].value)))].filter(e => e);
      var p = i.map(img => akx('retrieveMediaFile', {
        "filename": img
      }));
      return Promise.all(p).then(data => {
        if (data.filter(d => d).length > 0) {
          q.imgs[f] = []
        }
        data.forEach((d, di) => {
          if (d) {
            q.imgs[f].push([i[di], `data:image/png;base64,${d}`])
          }
        })

      });
    }
    //console.log(await q);
    q.related = getTags(q.tags);
    q.path = Object.fromEntries([...document.querySelectorAll('.standard-header')].map(s => [s.textContent, s.previousSibling.textContent]));
    q.path.id = q.id;
    await getImgs('Sketchy');
    await getImgs('First Aid');
    await getImgs('Pixorize');

    async function addToQueue() {
      var cards = q.ninfo.flatMap(n => n.cards);
      //var destination = ['UW', q.path.System, q.path.Subject, q.path.Topic, q.path.id].join('::')
      var destination = ['UW',window.location.pathname.replace('/courseapp/usmle/v12/testinterface/launchtest/9300640/','').split('/')[0]].join('::');
      console.log(destination, cards);
      //await akx('sync').then(() => {
      //  setTimeout(async () => {
          //await akx('unsuspend', {"cards": cards});
          //await akx('changeDeck', {"cards": cards, "deck": destination});
          //await akx('sync');
      //  }, 1000)
      //});
      
    }

    await addToQueue();

    function show() {
      if (document.querySelector('#ankiInfo')) {
        document.querySelector('#ankiInfo').remove();
      }
      var ankiInfo = document.createElement("div");
      ankiInfo.id = 'ankiInfo';
      //var extra = document.createElement("button");
      //extra.textContent = "Add Related Cards";
      //extra.onclick = () => {
      //var toAdd = confirm("Add extra cards for tags?");

      //var toAdd = prompt("Add extra cards for tags:", JSON.stringify(q.related));
      //console.log(toAdd);
      //var fields = Object.keys(q.related);
      //fields.forEach(async f => {
      //console.log(q.related[f])
      //var search = ('tag:' + q.related[f].join(' OR tag:')).replace(/(?=[()])/g, '\\');
      //var cards = await invoke("findCards", 6, {"query": search});

      //.map(i => i.replace(/^#AK/,'tag:#AK')).map(i => i.replaceAll("(","\\(")).map(i => i.replaceAll(")","\\)"))
      //console.log(cards.length, search, cards)  
      //})


      //}

      //ankiInfo.appendChild(extra);

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
    return await q;
  }


  
  var observer = new MutationObserver(mutations => {
    cb();
  });

  function startObserver() {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function stopObserver() {
    observer.disconnect();
    observer.takeRecords();
  }



  async function cb() {
    if (document.querySelector(selector)) {
      var curr = document.querySelector(selector).textContent.replace(/[^\d]/g, '');
      console.log(curr);
      /*if (curr != lastqid) {
        popup("30", ppts[0], 1000, 'green');
        popup("45", ppts[1], 1000, 'yellow');
        popup("60 ... MOVE ON!", ppts[2], 1000, 'red');
        lastqid = curr;
      }*/
    }
    stopObserver();
    window.q = await processQuestion();
    startObserver();
  }



  waitForElm("common-content").then(async elm => {
    //elm.style.height = "max(100vh, 100%)";
    var myCss = addcss(myStyle);
    myCss.innerText += `
    .question-content {
      max-width: 100% !important;
    }

    #first-explanation > p:last-of-type {
      padding: 1em;
      font-size: 1.42691em;
      background-color: #ff007f;
      text-indent: -1.0em;
      padding-left: 2.4em;
      /*background-color: blue;*/
      
      /* background-color: var(--primary);*/
      color: yellow;
      /*color: var(--nav-header-font);*/
    }
     #first-explanation > p:last-of-type > .textHighlight {
      color: #0000ff;
    }
    
    
    `;
      //window.onpointerup = 
    document.ontouchend = (e) => {
      //document.dispatchEvent(new Event('mouseup'));
      document.querySelectorAll("i.fa-circle.fa-stack-1x.fas.highlighter")[0].click();
      document.dispatchEvent(new KeyboardEvent("keydown", {key : "Escape"}));
    }
    var btn = document.createElement("button");
    btn.textContent = 'SYNC';
    btn.onclick = () => { let w = window.open('http://192.168.1.127:8766/sync', "_blank"); setTimeout(() => w.close(), 1000); }
    document.querySelector("#leftNavigator").appendChild(btn);
    btn.click();
    cb();
  });
  



})();
