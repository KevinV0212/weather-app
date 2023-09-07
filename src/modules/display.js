// receives a promise resolving in a a weather object
export default async function displayWeather(weatherResponse) {
  const weatherObj = await weatherResponse;

  const location = document.querySelector(".location");
  const condition = document.querySelector(".condition");
  const conditionIcon = document.querySelector(".condition-info>img");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");

  location.textContent = weatherObj.loc;
  condition.textContent = weatherObj.cond;
  conditionIcon.setAttribute("src", weatherObj.condIcon);
  temp.textContent = `${weatherObj.tempF}° / ${weatherObj.tempC}°`;
  humidity.textContent = `Humidity - ${weatherObj.humid}`;
}
