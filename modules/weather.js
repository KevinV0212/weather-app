async function fetchForecast(location) {
  const key = "85bcb1e0a30e45d191242644230309";
  const request = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`;
  // add loading element
  const locationInput = document.querySelector("#location-input");
  locationInput.value = "Loading...";
  locationInput.disabled = true;
  const response = await fetch(request, { mode: "cors" });
  return response.json();
}

// returns object with info about forecast at [location]
export default async function getForecast(location) {
  // call fetch forecast based on location
  const data = await fetchForecast(location);
  // break down all of that info into necessary info
  const forecastObject = {
    // data for main section
    mainInfo: {
      loc: data.location.name,
      tempF: data.current.temp_f,
      tempC: data.current.temp_c,
      cond: data.current.condition.text,
      condIcon: data.current.condition.icon,
      tempHiF: data.forecast.forecastday[0].day.maxtemp_f,
      tempHiC: data.forecast.forecastday[0].day.maxtemp_c,
      tempLoF: data.forecast.forecastday[0].day.mintemp_f,
      tempLoC: data.forecast.forecastday[0].day.mintemp_c,
    },

    // data for details section

    extraInfo: {
      tempFeelF: data.current.feelslike_f,
      tempFeelC: data.current.feelslike_c,
      humid: data.current.humidity,
      uv: data.current.uv,
      windSpd: data.current.wind_mph,
      windDir: data.current.wind_dir,
      windDeg: Math.round(data.current.wind_degree),
      vis: data.current.vis_miles,
      pressure: data.current.pressure_mb,
    },
  };
  console.log(forecastObject);
  return forecastObject;
}
