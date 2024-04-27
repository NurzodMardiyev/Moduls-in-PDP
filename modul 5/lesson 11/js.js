const arr = ["bame", 23, true];

arr.map((idx) => {
  console.log(idx);
});

function mapp() {
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(a);
    console.log(arr[i]);
  }
}
mapp();
