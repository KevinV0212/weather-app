// receives a promise resolving in a a weather object
export default async function displayWeather(weatherResponse) {
  const weatherObj = await weatherResponse;

  // display main info
  const location = document.querySelector("#location");
  const condition = document.querySelector("#condition");
  const temp = document.querySelector("#temp");
  const tempHi = document.querySelector("#temp-hi");
  const tempLo = document.querySelector("#temp-lo");

  location.textContent = weatherObj.mainInfo.loc;
  temp.textContent = `${weatherObj.mainInfo.tempF}°`;
  condition.textContent = `${weatherObj.mainInfo.cond}`;
  tempHi.textContent = `Hi: ${weatherObj.mainInfo.tempHiF}`;
  tempLo.textContent = `Lo: ${weatherObj.mainInfo.tempLoF}`;

  // display extra details

  const tempFeel = document.querySelector("#temp-feel");
  const humid = document.querySelector("#humid");
  const uv = document.querySelector("#uv");
  const wind = document.querySelector("#wind");
  const vis = document.querySelector("#vis");
  const pressure = document.querySelector("#pressure");

  tempFeel.textContent = `Feels like: ${weatherObj.details.tempFeelF}°`;
  humid.textContent = `Humidity: ${weatherObj.details.humid}`;
  uv.textContent = ` UV Index: ${weatherObj.details.uv}`;
  wind.textContent = `Wind: ${weatherObj.details.windSpd} mph ${weatherObj.details.windDir}`;
  vis.textContent = `${weatherObj.details.vis} mi`;
  pressure.textContent = `${weatherObj.details.pressure} mb`;
}
