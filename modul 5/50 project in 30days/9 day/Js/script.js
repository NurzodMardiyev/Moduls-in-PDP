"use strict";

window.addEventListener("load", () => {
  const sounds = ["konsta", "bojalar", "shoxrux"];

  sounds.forEach((sound) => {
    const btn = document.createElement("btn");

    btn.classList.add("btn");

    btn.innerText = sound;

    document.getElementById("btn").appendChild(btn);
  });
});
