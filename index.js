// ==UserScript==
// @name         GitHub old feed
// @namespace    https://github.com/EastSun5566
// @version      0.0.1
// @description  Bring the old GitHub feed back
// @author       Michael Wang
// @license      MIT
// @homepageURL  https://github.com/EastSun5566
// @match        https://github.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

// @ts-check

(function () {
  fetch('https://github.com/dashboard-feed')
    .then((res) => res.text())
    .then((text) => {
      const doc = new DOMParser().parseFromString(text, 'text/html');
      const oldFeed = doc.querySelector('main');

      const dashboard = document.getElementById('dashboard');
      if (dashboard && oldFeed) dashboard.replaceWith(oldFeed);
    })
    .catch((err) => console.error('Failed to fetch old feed', err));
}());
