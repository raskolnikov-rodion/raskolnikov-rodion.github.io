/**
 * Credits to Kevin Powell
 * Original CodePen: https://codepen.io/kevinpowell/pen/eYjRVmw
 */

(function calibrateScroll() {
  const navHeight = document.querySelector('nav')?.offsetHeight || 80;
  document.documentElement.style.setProperty(
    '--scroll-padding',
    `${navHeight}px`
  );
})();
