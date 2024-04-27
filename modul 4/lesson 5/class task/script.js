const newUl = document.createElement("ul"),
  liEl = document.createElement("li");

liEl.innerText = "Hello G14";

newUl.appendChild(liEl);

document.body.appendChild(newUl);
console.dir(liEl);
console.log(newUl);
