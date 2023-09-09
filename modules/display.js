// receives a promise resolving in a a weather object
export default async function displayWeather(weatherResponse) {
  const weatherObj = await weatherResponse;

  const location = document.querySelector("#location");
  const condition = document.querySelector("#condition");
  const temp = document.querySelector("#temp");
  const tempHi = document.querySelector("#temp-hi");
  const tempLo = document.querySelector("#temp-lo");

  location.textContent = weatherObj.loc;
  temp.textContent = `${weatherObj.tempF}°`;
  condition.textContent = `${weatherObj.cond}`;
  tempHi.textContent = `Hi: ${weatherObj.tempHiF}`;
  tempLo.textContent = `Lo: ${weatherObj.tempLoF}`;
}
