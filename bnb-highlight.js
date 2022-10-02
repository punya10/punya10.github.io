// ==UserScript==
// @name         BnB-ipad-Highlight
// @namespace    *
// @version      0.1
// @description  Enable highlighting for BnB
// @author       You
// @match        https://www.boardsbeyond.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=boardsbeyond.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector(".quiz-screen-body").style.height = "auto";
    window.addEventListener('pointerup', (event) => {
        event.target.dispatchEvent(new MouseEvent("mouseup", {
            bubbles: true,
            cancelable: true,
            view: window
        }));
        setTimeout(i => window.getSelection().removeAllRanges(), 10);
    });
})();
