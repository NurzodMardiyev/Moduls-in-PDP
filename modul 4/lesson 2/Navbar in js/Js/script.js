"use strict";

const navbarBtn = document.querySelector(".navbar__btn"),
  navbarAnimationMenu = document.querySelector(".navbar__animation-menu");

navbarBtn.addEventListener("click", () => {
  navbarBtn.classList.toggle("is-active");

  navbarAnimationMenu.classList.toggle("navbar__meni-avtive");
  console.log(navbarAnimationMenu);
});
