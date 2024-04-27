"use strict";

const sliderHero = document.querySelectorAll(".hero__information"),
  next = document.querySelector("#next"),
  current = document.querySelector(".prevCounter"),
  total = document.querySelector(".nextCounter"),
  circleBtns = document.querySelectorAll(".nextPrevBtn__icon"),
  wrapper = document.querySelector(".hero__wrapper"),
  wrapperInner = document.querySelector(".hero__wrapper-inner"),
  width = window.getComputedStyle(wrapper).width;
7;

console.log(width);

let sliderIdx = 1;

console.dir(window.onclick);

// var swiper = new Swiper(".mySwiper", {
//   direction: "vertical",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// wrapperInner.style.display = "flex";
// wrapperInner.style.width = 100 * sliderHero.length + "%";

// wrapper.style.overflow = "hidden ";

// sliderHero.forEach((slide) => {
//   slide.style.width = width;
// });

// showSlides(sliderIdx);

// if (sliderHero.length < 10) {
//   total.textContent = `0${sliderHero.length}`;
// } else {
//   total.textContent = sliderHero.length;
// }

// function showSlides(idx) {
//   if (idx > sliderHero.length) {
//     sliderIdx = 1;
//   }
//   sliderHero.forEach((item) => (item.style.display = "none"));
//   sliderHero[sliderIdx - 1].style.display = "block";

//   if (sliderHero.length < 10) {
//     current.textContent = `0${sliderIdx}/`;
//   } else {
//     current.textContent = sliderIdx;
//   }

//   // circleBtns.forEach((item) => {
//   //   item.classList.toggle = "active";
//   // });
// }

// function plusSlides(idx) {
//   showSlides((sliderIdx += idx));
// }

next.addEventListener("click", () => plusSlides(1));
