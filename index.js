import "./style.css";
import getWeather from "./modules/weather.js";
import displayWeather from "./modules/display.js";

getWeather("London")
  .then((weatherObject) => displayWeather(weatherObject))
  .catch(alert);

// on submit, take get weather at input locaiton from api
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  getWeather(input.value)
    .then((weatherObject) => displayWeather(weatherObject))
    .catch(alert);
});
