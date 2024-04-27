"use strict";

let userName = document.querySelector("#userName"),
  noneOption = document.querySelector("#noneOption");

// console.log(userName);

noneOption.addEventListener("click", () => {
  console.log(userName.value);
});
