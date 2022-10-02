// ==UserScript==
// @name         BnB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.boardsbeyond.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=boardsbeyond.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Loaded PJ's highlight script!");

    document.querySelector(".quiz-screen-body").style.height = "auto";
    window.addEventListener('pointerup', (event) => {
        event.target.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: true,
            view: window
        }));
        setTimeout(i => window.getSelection().removeAllRanges(), 10);
    });

    // Your code here...
})();
