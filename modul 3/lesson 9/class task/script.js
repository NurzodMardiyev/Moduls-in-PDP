const obj = {};

let btnAdd = document.querySelector(".btnAdd"),
  btnDalate = document.querySelector(".btnDalate");

btnAdd.addEventListener("click", function () {
  let value = prompt("value kiriting");
  obj[value] = prompt("itemni kirit");

  console.log(obj);
});
btnDalate.addEventListener("click", function () {
  let del = prompt("valueni yozing");
  for (key in obj) {
    if (obj[key] === del) {
      obj[key] = "";
      console.log(obj);
    } else {
      console.log("unaqa yuq");
    }
  }
});
