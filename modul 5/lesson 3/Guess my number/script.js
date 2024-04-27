"use strict";

window.addEventListener("load", () => {
  let randomSon = Math.floor(Math.random() * 20) + 1;
  const guessInput = document.querySelector(".guess"),
    checkBtn = document.querySelector(".check");

  // Click Again Button
  const again = document.querySelector(".again");
  again.addEventListener("click", () => {
    againBtn();
  });

  // Function Input Value
  let counterCheck = 1;
  const scoreEl = document.querySelector(".score");
  const message = document.querySelector(".message");
  const highscore = document.querySelector(".highscore");
  const body = document.querySelector("body");
  const numberBig = document.querySelector(".number");
  checkBtn.addEventListener("click", () => {
    let score = 20 - counterCheck;
    if (+guessInput.value === randomSon) {
      console.log("ok");
      message.innerHTML = "Correct";
      body.style.backgroundColor = "#60b347";
      const maxScore = score;
      if (maxScore > score) {
        highscore.innerHTML = `${maxScore}`;
        numberBig.innerHTML = `${maxScore}`;
      } else {
        highscore.innerHTML = `${score}`;
        numberBig.innerHTML = `${score}`;
      }
    } else {
      if (+guessInput.value > randomSon) {
        message.innerHTML = "Too high";
      } else {
        message.innerHTML = "Too low";
      }
    }
    counterCheck++;

    if (score < 1) {
      alert("you lose");
    } else {
      scoreEl.innerHTML = `${score}`;
    }
    // console.log(score);
  });

  // function Again
  function againBtn() {
    randomSon = Math.floor(Math.random() * 20) + 1;
    scoreEl.innerHTML = "20";
    counterCheck = 1;
    message.innerHTML = "Start guessing...";
    body.style.backgroundColor = "#222";
    guessInput.value = "";
    console.log(randomSon);
  }
  console.log(randomSon);
});
