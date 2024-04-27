"use strict";

const formEl = document.getElementById("formInput");
const inputEl = document.querySelector("#userName");
const password = document.querySelector("#passwordInput");
const labels = document.querySelectorAll("label");

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split("")
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
//     )
//     .join("");
// });
if (true) {
  inputEl.addEventListener("input", () => {
    console.log(inputEl.value);
    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split("")
        .map(
          (letter, idx) =>
            `<span style="transition-delay: ${
              idx * 50
            }ms; transform: translateY(-25px)">${letter}</span>`
        )
        .join("");
    });
  });
} else {
  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
      )
      .join("");
  });
}
