// ==UserScript==
// @name        rx-fix
// @match       *usmle-rx.scholarrx.com*
// @grant       none
// @version     0.1
// @author      Punya Jain
// @description USMLE-Rx to Amboss questions finder
// @downloadURL https://punya10.github.io/rx/rx-fix.user.js
// @updateURL https://punya10.github.io/rx/rx-fix.user.js
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
    animation: fade-in 1s;
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
function popup(contents, timeout = 3000, cb = () => {}) {
    var d = document.createElement("DIALOG");
    d.innerHTML = contents;
    d.addEventListener('close', cb);
    document.body.appendChild(d);
    d.showModal();
    if (timeout > 0) setTimeout(() => (d.remove() && cb()), timeout);
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


(function () {
    var myCss = addcss(myStyle);
    waitForElementToDisplay(".card-content", (elm) => {
        //alert("card loaded");
        //alert(JSON.stringify([window.innerWidth, document.querySelector("mat-sidenav-content").offsetWidth, elm.offsetWidth]));
        window.cscale = (document.querySelector("mat-sidenav-content").offsetWidth - 60) / elm.offsetWidth;
        myCss.innerText += `.card-content { transform: scale(${window.cscale}); }`;
    });

    var img = document.getElementById("AMBOSS") || document.createElement("img");
    if (!document.getElementById("#AMBOSS")) {
        img.id = "AMBOSS";
        img.src = ambossLogo;
        img.style.width = "69px";
        img.style.marginLeft = "13px";
        document.querySelector("mat-nav-list").appendChild(img);
        img.onclick = async () => {
            var fat = await getFA();
            var pageId;
            var did, title;
            if (window.location.pathname.startsWith('/first-aid')) {
                const urlParams = new URLSearchParams(window.location.search);
                pageId = urlParams.get('id');
                did = fat[pageId].deckId;
            }
            if (window.location.pathname.startsWith('/play-deck')) {
                did = window.location.pathname.replace(/[^\d]/g, '');
                var topic = Object.values(fat).find(t => t.deckId == did);
                pageId = topic.id;
            }
            title = `${fat[pageId].chapter.name}::${fat[pageId].subject.name}::${fat[pageId].name}::${fat[pageId].location}`;
            console.log(title);
            getCards(did, title).then(url => {
                if (url) {
                    //popup(`<h1>${title}</h1><br><br><a id="AMBOSSURL" href="${url}">${url}</a>`, 10000)
                    popup(`<h1>${title}</h1><br><iframe src="${url}"></iframe>`, 0);
                    console.log(url);
                    //window.open(url);
                    //document.querySelector("a#AMBOSSURL").click();
                }
            });
        }
    }
})();
