window.addEventListener("load", () => {
  const playstation5 = document.querySelector(".playstation5");
  const xBox = document.querySelector(".xBox");
  const row = document.querySelector(".row");

  playstation5.addEventListener("mouseenter", () =>
    row.classList.add("hover-left")
  );

  playstation5.addEventListener("mouseleave", () =>
    row.classList.remove("hover-left")
  );
  xBox.addEventListener("mouseenter", () => row.classList.add("hover-right"));

  xBox.addEventListener("mouseleave", () =>
    row.classList.remove("hover-right")
  );
});
