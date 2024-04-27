// Search section
let API;
const formEl = document.querySelector("#form");
const inputEl = document.querySelector("#inputEl");
const btn = document.querySelector("#btn"),
  weather = document.querySelector(".weather");

// My Data Base

const dataBase = [];

// Get Data
const getData = (resourse) => {
  return new Promise((resolve, rejact) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        rejact("Error");
      }
    });

    request.open("GET", resourse);
    request.send();
  });
};

weather.style.display = "none";

btn.addEventListener("click", (event) => {
  event.preventDefault();

  // Current Time
  function currentTime() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const time = new Date();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    console.log(hour);
    return `${months[month - 1]}, ${date}, ${hour}: ${minutes}`;
  }

  // SunSet
  // function sunSet() {

  // }

  // API
  API = `https://api.openweathermap.org/data/2.5/weather?q=${inputEl.value}&units=metric&appid=b74e14ed8881d5d4fde1a122b220b3a6`;

  const changeData = document.querySelector("#changeData");

  getData(API)
    .then((sub) => {
      // const dataBaseObj = {
      //   id: dataBase.length,
      //   // template,
      // };

      const template = `
      <h1 class="fs-3">${sub.name}</h1>
      <div class="day">
        <span>Today, ${currentTime()}</span>
      </div>
      <div class="temp">
        <i class="fs-1 my-2 fa-sharp fa-solid fa-cloud"></i>

        <span class="dayTemp fs-1 ml-3">${sub.main.temp}°</span>
        <span class="nightTemp fs-4">${sub.main.temp_min}°</span>
      </div>
      <h2 class="cloudIcon fs-3 fw-normal">${sub.weather[0].main}</h2>

      <div
        class="infoWeatherFull my-2 border border-start-0 border-end-0 py-3 d-flex gap-5"
      >
        <div class="d-flex flex-column">
          <span>Namlik: ${sub.clouds.all}%</span>
          <span>Quyosh chiqishi: ${Math.floor(
            (sub.sys.sunset / (1000 * 60 * 60)) % 24
          )} : ${Math.floor((sub.sys.sunset / (1000 / 60)) % 60)} </span>
          <span>Bosim: ${sub.main.pressure} mm sim. ust.</span>
        </div>
        <div class="d-flex flex-column">
          <span>Oy: O'sayotgan oy</span>
          <span>Shamol: Sharqiy, ${sub.wind.speed} m/s</span>
          <span>Quyosh botishi: 17:31</span>
        </div>
      </div>
      <div class="inDay d-flex gap-5">
        <div class="d-flex flex-column text-center">
          <h3>Tong</h3>
          <i class="fs-1 fa-sharp fa-solid fa-cloud"></i>
          <span class="degree">5°</span>
        </div>
        <div class="d-flex flex-column text-center">
          <h3>Kun</h3>
          <i class="fs-1 fa-sharp fa-solid fa-cloud"></i>
          <span class="degree">5°</span>
        </div>
        <div class="d-flex flex-column text-center">
          <h3>Oqshom</h3>
          <i class="fs-1 fa-sharp fa-solid fa-cloud"></i>
          <span class="degree">5°</span>
        </div>
      </div>`;
      changeData.innerHTML = template;
      console.log(sub);
    })
    .catch((err) => {
      console.log(err);
    });

  inputEl.value = "";

  weather.style.display = "block";
});
