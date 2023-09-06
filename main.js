console.log("connected");

// function that takes a location, requests from API, ten returns a promise to it
async function fetchWeather(location) {
  const key = "85bcb1e0a30e45d191242644230309";
  const request = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  const response = await fetch(request);
  return response.json();
}

// function that returns an object with all of the info from fetch request
async function getWeather(location) {
  // call fetch weather based on location
  const weatherData = await fetchWeather(location);
  // break down all of that info into necessary info
  const weatherObject = {
    loc: weatherData.location.name,
    tempF: weatherData.current.temp_f,
    tempC: weatherData.current.temp_c,
  };
  return weatherObject;
}

// function that displays info in weather object into browser window

function displayWeather(weatherObj) {
  const location = document.querySelector(".location");
  const temp = document.querySelector(".temp");

  location.textContent = weatherObj.loc;
  temp.textContent = `${weatherObj.tempF}° / ${weatherObj.tempC}°`;
}

// on submit, take get weather at input locaiton from api

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  getWeather(input.value)
    .then((weatherObject) => displayWeather(weatherObject))
    .catch(alert);
});
