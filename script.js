import getForecast from "./modules/weather.js";
import displayWeather from "./modules/display.js";

let data = null;
getForecast("London")
  .then((forecastObj) => {
    data = forecastObj;
    displayWeather(forecastObj, "f");
  })
  .catch(alert);

// on submit, take get weather at input locaiton from api
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  getForecast(input.value)
    .then((weatherObject) => displayWeather(weatherObject))
    .catch(alert);
});

const fToggle = document.querySelector("#f-toggle");
const cToggle = document.querySelector("#c-toggle");

// change temp unit to F
fToggle.addEventListener("click", (e) => {
  e.preventDefault();
  fToggle.classList.add("active");
  cToggle.classList.remove("active");
  getForecast("London")
    .then((forecastObj) => {
      data = forecastObj;
      displayWeather(forecastObj, "f");
    })
    .catch(alert);
});

// change temp unit to C
cToggle.addEventListener("click", (e) => {
  e.preventDefault();
  cToggle.classList.add("active");
  fToggle.classList.remove("active");
  getForecast("London")
    .then((forecastObj) => {
      data = forecastObj;
      displayWeather(forecastObj, "c");
    })
    .catch(alert);
});
