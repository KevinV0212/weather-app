// receives a promise resolving in a a weather object
export default async function displayWeather(weatherResponse) {
  const weatherObj = await weatherResponse;

  const location = document.querySelector("#location");
  const condition = document.querySelector("#condition");
  const conditionIcon = document.querySelector("#condition-icon");
  const temp = document.querySelector("#temp");

  location.textContent = weatherObj.loc;
  condition.textContent = `${weatherObj.cond}`;
  conditionIcon.setAttribute("src", weatherObj.condIcon);
  temp.textContent = `${weatherObj.tempF}°F`;
}
