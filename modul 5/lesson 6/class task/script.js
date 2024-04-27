const recognation = new webkitSpeechRecognition();
recognation.continuous = false;
recognation.lang = "en-En";
console.log(recognation);
const inputEl = document.querySelector(".inputEl");
recognation.onresult = (result) => {
  const words = result.results[0][0].transcript;
  console.log((inputEl.value = `${words}`));
  console.dir(inputEl);
};

recognation.onstart = () => {
  console.log("gapiring...");
};
recognation.onend = () => {
  console.log("toxtadi");
};

function listen() {
  recognation.start();
}
