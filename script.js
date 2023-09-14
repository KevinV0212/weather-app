import getForecast from "./modules/weather.js";
import displayWeather from "./modules/display.js";

let location = null;
getForecast("London").then((forecastObj) => {
  if (forecastObj) location = forecastObj.mainInfo.loc;
  displayWeather(forecastObj, "f");
});

// on submit, take get weather at input locaiton from api
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  getForecast(input.value).then((forecastObj) => {
    if (forecastObj) location = forecastObj.mainInfo.loc;
    displayWeather(forecastObj, "f");
  });
});

const fToggle = document.querySelector("#f-toggle");
const cToggle = document.querySelector("#c-toggle");

// change temp unit to F
fToggle.addEventListener("click", (e) => {
  e.preventDefault();
  fToggle.classList.add("active");
  cToggle.classList.remove("active");
  getForecast(location).then((forecastObj) => {
    displayWeather(forecastObj, "f");
  });
});

// change temp unit to C
cToggle.addEventListener("click", (e) => {
  e.preventDefault();
  cToggle.classList.add("active");
  fToggle.classList.remove("active");
  getForecast(location).then((forecastObj) => {
    displayWeather(forecastObj, "c");
  });
});
