const container = document.querySelector(".container"),
  registerBtn = document.querySelector("#register"),
  loginBtn = document.querySelector(".login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
