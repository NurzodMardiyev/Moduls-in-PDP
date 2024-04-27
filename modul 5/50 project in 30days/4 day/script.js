"use strict";

const formTag = document.querySelector("form");

formTag.addEventListener("submit", function (event) {
  event.preventDefault();

  formTag.classList.toggle("active");

  // const btn = event.target[1];
  // btn.addEventListener("click", () => {
  //   formTag.classList.toggle("active");
  // });
  // console.log(btn);
  formTag.reset();
});
