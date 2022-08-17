"use strict";

const reviewsSwiper = document.querySelector(".swiper-reviews");

if (reviewsSwiper) {
  const swiper = new Swiper(".swiper-reviews", {
    // Optional parameters
    autoHeight: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// scroll progress
const readingProgress = document.querySelector("#reading-progress-fill");
document.addEventListener("scroll", function (e) {
  let w =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100;
  readingProgress.style.setProperty("width", w + "%");
});
// scroll progress
