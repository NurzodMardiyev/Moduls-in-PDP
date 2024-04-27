window.addEventListener("load", () => {
  const loader = document.querySelector(".loader__counter span");
  const bg = document.querySelector(".bg");

  // Set Interval
  let int = setInterval(bluring, 20);

  let loop = 0;
  let loopReverse = 100;
  function bluring() {
    loop++;
    if (loop <= 100) {
      loader.innerHTML = `${loop}%`;
      bg.style.opacity = `${loop / 100}`;
      bg.style.filter = `blur(${loopReverse - loop}px)`;
    } else {
      clearInterval(int);
    }
  }
});
