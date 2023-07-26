"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

const feedbackScroll = document.querySelector(".feedback__feedback-wrapper");

feedbackScroll.addEventListener(
  "wheel",
  function (e) {
    if (e.wheelDelta > 0) {
      this.scrollLeft -= 50;
    } else {
      this.scrollLeft += 50;
    }
  },
  { passive: true }
);

feedbackScroll.addEventListener("wheel", (e) => {
  e.preventDefault();
});

$(document).ready(function () {
  $("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top,
        },
        1000
      );
    e.preventDefault();
    return false;
  });
});
