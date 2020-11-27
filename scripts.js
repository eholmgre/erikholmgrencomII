function toggleMenu() {
    let header = document.getElementsByTagName("header")[0];
    let navlinks = document.getElementsByTagName("nav")[0];
    let body = document.body;
    let hamburger = document.getElementById("hamburger");
    header.classList.toggle("header-extended");
    navlinks.classList.toggle("nav-extended");
    hamburger.classList.toggle("hamburger-extended");
    body.classList.toggle("body-extended");
}

/*
(function() {

  'use strict';

  var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;

  function setTopPadding() {
    hHeight = h.offsetHeight;
    m.style.paddingTop = hHeight + "px";
  }

  function onScroll() {

    window.addEventListener("scroll", _.throttle(callbackFunc, 200)); */
/**
 * Replace the line above with the following one 
 * to see how many more times the "callbackFunc" is executed
 */
// window.addEventListener("scroll", callbackFunc);

/*
    function callbackFunc() {
      var y = window.pageYOffset;
      if (y > 150) {
        h.classList.add("scroll");
      } else {
        h.classList.remove("scroll");
      }
    }
  }

  window.onload = function() {
    setTopPadding();
    onScroll();
  };

  window.onresize = function() {
    setTopPadding();
  };
})();
*/