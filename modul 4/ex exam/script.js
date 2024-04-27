const formel = document.querySelector("#formEl");

const thinkObj = {
  price: 10,
};
const sizeObj = {
  price: 10,
};

const onPizzaObj = {
  price: 5,
};

const addObj = {
  price: 5,
};

const dataBase = [];

formel.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target[0];
  const number = event.target[1];
  const adress = event.target[2];
  const selectThink = event.target[3];
  const selectSize = event.target[4];
});
console.dir(formel);
