const names = ["eshmat", "toshmat", "ilhombek", "islombek", "john", "ali"];

// const newNames = names.filter((names) => names.length < 5);

// const newNames = names.
const myNames = filterFunc(names, (name) => {
  return name;
});

function filterFunc(array, callback) {
  const newNames = [];
  for (let i = 0; i <= array.length; i++) {
    if (array.length > 5) {
      const newItem = callback(array[i], i, array);
      newItem.push(newItem);
    } else {
      console.log("name");
    }
  }
  return newNames;
}

console.log(myNames);
