// resolves [weatherResponse] then displays information on webpage
export default async function displayWeather(weatherResponse, tUnit) {
  const weatherObj = await weatherResponse;

  // display main info
  const location = document.querySelector("#location");
  location.textContent = weatherObj.mainInfo.loc;

  displayTemp(weatherObj, tUnit);

  // display extra details
  const humid = document.querySelector("#humid");
  const uv = document.querySelector("#uv");
  const wind = document.querySelector("#wind");
  const vis = document.querySelector("#vis");
  const pressure = document.querySelector("#pressure");

  humid.innerHTML = `<i class="icon wi wi-humidity"></i> <h3>Humidity</h3> ${weatherObj.extraInfo.humid}%`;
  uv.innerHTML = ` <i class="icon wi wi-day-sunny"></i> <h3>UV Index</h3> ${weatherObj.extraInfo.uv}`;
  wind.innerHTML = `<i class="icon wi wi-wind from-28-deg"></i> <h3>Wind</h3> ${weatherObj.extraInfo.windSpd} mph ${weatherObj.extraInfo.windDir}`;
  vis.innerHTML = `<span class="icon mdi mdi-eye"></span> <h3>Visibility</h3> ${weatherObj.extraInfo.vis} mi`;
  pressure.innerHTML = `<i class="icon wi wi-barometer"></i> <h3>Pressure</h3> ${weatherObj.extraInfo.pressure} mb`;
}

// given populates temperature elements based on temperature unit
function displayTemp(weatherObj, tUnit) {
  const temp = document.querySelector("#temp");
  const tempHi = document.querySelector("#temp-hi");
  const tempLo = document.querySelector("#temp-lo");
  const tempFeel = document.querySelector("#temp-feel");

  if (tUnit == "c" || tUnit == "C") {
    temp.textContent = `${weatherObj.mainInfo.tempC}°`;
    tempHi.textContent = `H:${weatherObj.mainInfo.tempHiC}°`;
    tempLo.textContent = `L:${weatherObj.mainInfo.tempLoC}°`;
    tempFeel.innerHTML = `<i class="icon wi wi-thermometer"></i> <h3>Feels like</h3> ${weatherObj.extraInfo.tempFeelC}°`;
  } else {
    temp.textContent = `${weatherObj.mainInfo.tempF}°`;
    tempHi.textContent = `H:${weatherObj.mainInfo.tempHiF}°`;
    tempLo.textContent = `L:${weatherObj.mainInfo.tempLoF}°`;
    tempFeel.innerHTML = `<i class="icon wi wi-thermometer"></i> <h3>Feels like</h3> ${weatherObj.extraInfo.tempFeelF}°`;
  }
}
