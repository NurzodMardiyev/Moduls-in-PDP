var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.querySelector('#btn');
function add(a, b) {
    return a + b;
}
btn.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
