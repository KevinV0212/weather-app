async function fetchForecast(location) {
  const key = "85bcb1e0a30e45d191242644230309";
  const request = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`;
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
    loc: data.location.name,
    tempF: data.current.temp_f,
    tempC: data.current.temp_c,
    cond: data.current.condition.text,
    condIcon: data.current.condition.icon,
    tempHiF: data.forecast.forecastday[0].day.maxtemp_f,
    tempHiC: data.forecast.forecastday[0].day.maxtemp_c,
    tempLoF: data.forecast.forecastday[0].day.mintemp_f,
    tempLoC: data.forecast.forecastday[0].day.mintemp_c,

    // data for details section
    feelF: data.current.feelslike_f,
    feelC: data.current.feelslike_c,
    humid: data.current.humidity,
    pressure: data.current.pressure_mb,
  };
  return forecastObject;
}
