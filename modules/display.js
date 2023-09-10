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

  tempFeel.innerHTML = `<h3>Feels like</h3> ${weatherObj.extraInfo.tempFeelF}°`;
  humid.innerHTML = `<h3>Humidity</h3> ${weatherObj.extraInfo.humid}%`;
  uv.innerHTML = ` <h3>UV Index</h3> ${weatherObj.extraInfo.uv}`;
  wind.innerHTML = `<h3>Wind</h3> ${weatherObj.extraInfo.windSpd} mph ${weatherObj.extraInfo.windDir}`;
  vis.InnerHTML = `<h3>Visibility</h3> ${weatherObj.extraInfo.vis} mi`;
  pressure.innerHTML = `<h3>Pressure</h3> ${weatherObj.extraInfo.pressure} mb`;
}
