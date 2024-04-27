// for in

let obj = {
  name: "nurzod",
  age: 22,
  male: "erkak",
  hobby: "stol tennis",
  nowYear: 2023,
  friend: {
    name: "Kamol",
    age: 22,
  },
};

for (key in obj) {
  if (typeof obj[key] === "object") {
    for (key2 in obj[key]) {
      console.log(`${key2} : ${obj[key][key2]}`);
    }
  } else {
    console.log(`${key} : ${obj[key]}`);
  }
}

// for of

let arr = [32, "nurzod", 43, 2023, "male"];

for (att of arr) {
  console.log(att);
}
