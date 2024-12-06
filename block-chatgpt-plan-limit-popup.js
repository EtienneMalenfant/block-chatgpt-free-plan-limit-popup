// ==UserScript==
// @name         Block GPT-4 Free Plan Limit Popup on ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks the GPT-4 free plan limit popup on chatgpt.com
// @author       Shifty93
// @match        https://chat.openai.com/*
// @match        https://chatgpt.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    function removePopup() {
        const popup = document.querySelector('.absolute.bottom-full.left-0.right-0.z-20');
        if (popup) {
            popup.style.display = 'none'; // Hide the popup
        }
    }

    setInterval(removePopup, 1000); // Check for the popup every second

})();
