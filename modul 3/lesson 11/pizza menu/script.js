"use strict";

let incerTegs = document.querySelectorAll(".pizza__tips a"),
  peperonPizza = document.querySelector("#peperonPizza"),
  assartPizza = document.querySelector("#assartiPizza"),
  sirnyPizza = document.querySelector("#sirnyPizza"),
  enterChoise = document.querySelector("#enterChoise"),
  choise = document.querySelector(".choise"),
  btn = document.querySelector("#btn"),
  pizzaImage = document.querySelector(".pizza__image"),
  pizzaMenu = document.querySelector(".pizza__menu");

incerTegs.forEach(function (aTegi) {
  aTegi.addEventListener("click", () => {
    incerTegs.forEach((item) => {
      item.classList.remove("active");
    });
    aTegi.classList.add("active");
  });
});
peperonPizza.addEventListener("click", () => {
  pizzaInfoPeperonni();
});
assartPizza.addEventListener("click", () => {
  pizzaInfoAssart();
});
sirnyPizza.addEventListener("click", () => {
  pizzaInfoSirny();
});

function pizzaInfoPeperonni() {
  pizzaImage.innerHTML = `
        <div class="pizza__image">
          <img src="./images/pizza 1 1.png" alt="Pizza" class="pizzaImg" />
        </div>
  `;
  // pizzaImage.style.display = "none";
  pizzaMenu.innerHTML = `
        <div class="pizza__menu">
          <h1>Peperonni Pitsa</h1>
          <div class="product">
            <p class="product__name">Sir</p>
            <p class="weight">370gr</p>
          </div>
          <div class="product">
            <p class="product__name">Kalbasa</p>
            <p class="weight">260gr</p>
          </div>
          <div class="product">
            <p class="product__name">Ketchup</p>
            <p class="weight">100gr</p>
          </div>
          <div class="product">
            <p class="product__name">Sous</p>
            <p class="weight">360gr</p>
        </div>
  `;
}

function pizzaInfoAssart() {
  pizzaImage.innerHTML = `
        <div class="pizza__image">
          <img src="./images/pizza 2.png" alt="Pizza" class="pizzaImg" />
        </div>
  `;
  // pizzaImage.style.display = "none";
  pizzaMenu.innerHTML = `
        <div class="pizza__menu">
          <h1>Assarti Pitsa</h1>
          <div class="product">
            <p class="product__name">Sir</p>
            <p class="weight">370gr</p>
          </div>
          <div class="product">
            <p class="product__name">Kalbasa</p>
            <p class="weight">260gr</p>
          </div>
          <div class="product">
            <p class="product__name">Ketchup</p>
            <p class="weight">100gr</p>
          </div>
          <div class="product">
            <p class="product__name">Sous</p>
            <p class="weight">360gr</p>
        </div>
  `;
}

function pizzaInfoSirny() {
  pizzaImage.innerHTML = `
        <div class="pizza__image">
          <img src="./images/pizza 3.png" alt="Pizza" class="pizzaImg" />
        </div>
  `;
  // pizzaImage.style.display = "none";
  pizzaMenu.innerHTML = `
        <div class="pizza__menu">
          <h1>Sirniy Pitsa</h1>
          <div class="product">
            <p class="product__name">Sir</p>
            <p class="weight">370gr</p>
          </div>
          <div class="product">
            <p class="product__name">Kalbasa</p>
            <p class="weight">260gr</p>
          </div>
          <div class="product">
            <p class="product__name">Ketchup</p>
            <p class="weight">130gr</p>
          </div>
          <div class="product">
            <p class="product__name">Sous</p>
            <p class="weight">360gr</p>
        </div>
  `;
}
