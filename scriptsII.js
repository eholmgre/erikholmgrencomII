function toggleMenu() { 
    if (toggleMenu.is_open === undefined) {
        toggleMenu.is_open = false;
    }
    if (!toggleMenu.is_open) {
        let title = document.getElementsByName
        let navlinks = document.getElementById("navlinks");
        navlinks.style.height = "100vh";
        //sidebar.style.display = "block";
        let hamburger = document.getElementById("hamburger");
        hamburger.style.transform = "rotate(90deg)"
        toggleMenu.is_open = true;
    } else {
        let navlinks = document.getElementById("navlinks");
        navlinks.style.height = "0";
        //sidebar.style.display = "none";
        let hamburger = document.getElementById("hamburger");
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