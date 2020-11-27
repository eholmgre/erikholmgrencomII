function toggleMenu() { 
    if (toggleMenu.is_open === undefined) {
        toggleMenu.is_open = false;
    }
    if (!toggleMenu.is_open) {
        let header =  document.getElementsByTagName("header")[0];
        let navlinks = document.getElementById("navlinks");
        let body = document.body;
        let hamburger = document.getElementById("hamburger");
        header.style.height = "100vh";
        navlinks.style.height = "auto";
        body.style.overflowY = "hidden";
        hamburger.style.transform = "rotate(90deg)"
        toggleMenu.is_open = true;
    } else {
        let header =  document.getElementsByTagName("header")[0];
        let navlinks = document.getElementById("navlinks");
        let body = document.body;
        let hamburger = document.getElementById("hamburger");
        navlinks.style.height = "0";
        header.style.height = "50px";
        body.style.overflowY = "scroll";
        hamburger.style.transform = "rotate(0deg)"
        toggleMenu.is_open = false;
    }
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