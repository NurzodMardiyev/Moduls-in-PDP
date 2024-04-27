let outputScreen = document.querySelector("#output-screen");

function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalit");
  }
}

function clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
