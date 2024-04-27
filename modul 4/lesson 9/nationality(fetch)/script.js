// Api
const Api = "https://api.nationalize.io/?name=";

const formEl = document.querySelector("#nation");
const card = document.querySelector("#card");

const recognation = new webkitSpeechRecognition();
recognation.continuous = false;
recognation.lang = "uz-Uz";

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target[0];
  const voice = document.getElementById("voice");

  recognation.onresult = (result) => {
    const words = result.results[0][0].transcript;
    const valueName = (name.value = `${words}`);
    fetch(Api + valueName)
      .then((result) => {
        // console.log(result);
        return result.json();
      })
      .then((res) => {
        card.innerHTML = "";
        // console.log(res.country[0].country_id);
        const imgUrl = `https://flagsapi.com/${res.country[0].country_id}/flat/64.png`;
        console.log(res);
        // console.log(imgUrl);

        const template = `
      <img src="${imgUrl}" class="card-img-top" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${
          res.name.charAt(0).toUpperCase() + res.name.slice(1)
        }</h5>
        <p class="card-text">
         <span class="fw-semibold"> Nation: </span>${res.country[0].country_id}
        </p>
        <div><span class="fw-semibold">Probability:</span> ${
          res.country[0].probability
        }</div>
      </div>
      `;
        card.innerHTML += template;
      })
      .catch((arr) => {
        console.log(arr);
      });
  };

  recognation.onstart = () => {
    voice.innerText = "Gapiring...";
  };
  recognation.onend = () => {
    voice.innerText = "To'xtang";
  };

  recognation.start();
});

function render() {
  const imgUrl = `https://flagsapi.com/${res.country[0].country_id}/:style/:size.png`;
  console.log(res.country[0].country_id);
}
// render();
