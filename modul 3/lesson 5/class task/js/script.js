// const arr = [{ name: "O'g'abek", age: 18 }];

// function name() {
//   const username = prompt("Username:");
//   users[users.length] = username;
//   console.log(arr);
// }

// for Loop

// for (let i = 1; i <= 10; i++) {
//   console.log("Assalom alaykum");
// }

// while Loop
// let i = 3;
// while (i <= 10) {
//   console.log(`salom ${i}`);
//   i++;
// }

const users = [
  "E'zoza",
  "Madina",
  "Farida",
  "Gulnoza",
  "Manzura",
  "Imona",
  "Dilshoda",
];

let ism = prompt();
function name(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i] === ism) {
      console.log("bu ism bor");
      break;
    } else {
      console.log("yo'q");
      // break;
    }
  }
}
name(users);
