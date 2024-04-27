// ? Strings
// const username = "Ibrohimbek va Ismoilbek",
//   username2 = "Ilhomdbek";
// console.log();

// ? at() - turgan pazitsiyadagi elementni chiqaradi
// console.log(username.at(4));

// ? charAt(position) - bu turgan pazitsiyadagi charni chiqaradi
// console.log(typeof username.charAt(10));

// ? concat(tex1, text2) - bu metod bir nechta stringni qo'shib beradi
// console.log(username.concat(" ", username2));

// ? includes("item") - elementni ichida item borligini indexini chiqaradi
// console.log(username.includes("him"));
// ! includes bu true false qaytaradi boolen qiymat

// ? padStart(count, "str") - elementni boshidan countcha emas qo'shilgan element bilan sanaganda councha bo'lishi kerak degan str qo'sh
// console.log(username2.padStart(30, "nurzod"));

// ? search("str") - str nechanchi pasitiondan boshlanganini ko'rsatadi agar bo'lmasa -1 chiqarib qo'yadi
// console.log(username.search("men"));

//  ? split(" ") vs split(",") vs split("|") bu metod bosh joy ko'rganda vs vergul ko'rganda vs | ko'rganda shungacha bo'gan strni massivga bo'lib beradi.
//console.log(username.split(" ")); //*[ 'Ibrohimbek', 'va', 'Ismoilbek' ]

let changeBtn = document.querySelector(".btn"),
  btn2 = document.querySelector(".btn2");

function changeBtnf() {
  // changeBtn.style.color = "red";
  changeBtn.classList.toggle("changeBtn");

  console.log("name");
}
btn2.addEventListener("click", () => {
  console.dir(btn2);
});
