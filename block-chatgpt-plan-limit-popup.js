// ==UserScript==
// @name         Block GPT-4 Free Plan Limit Popup on ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocks the GPT-4 free plan limit popup on chatgpt.com
// @author       You
// @match        http*://chat.openai.com/*
// @match        https://chatgpt.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove the popup
    function removePopup() {
        // Target the popup element by its CSS class or ID
        const popup = document.querySelector('.absolute.bottom-full.left-0.right-0.z-20'); // Replace with the actual class or ID of the popup
        if (popup) {
            popup.style.display = 'none'; // Hide the popup
        }
    }

    // Run the function to hide the popup
    setInterval(removePopup, 1000); // Check for the popup every second

})();
