const num1 = document.querySelector('#num1')! as HTMLInputElement;
const num2 = document.querySelector('#num2')! as HTMLInputElement;
const btn = document.querySelector('#btn')!;

function add(a: number, b: number) {
  return a + b;
}

btn.addEventListener('click', ()=> {
  console.log(add(+num1.value ,+num2.value));
  
})
