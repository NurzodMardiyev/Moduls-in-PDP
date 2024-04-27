const open = document.querySelector("#open"),
  close = document.querySelector("#close"),
  container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-menu");
});
close.addEventListener("click", () => {
  container.classList.remove("show-menu");
});
