async function fetchForecast(location) {
  const key = "85bcb1e0a30e45d191242644230309";
  const request = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=2`;
  const response = await fetch(request, { mode: "cors" });

  return response.json();
}

// returns object with info about forecast at [location]
export default async function getForecast(location) {
  // call fetch forecast based on location
  const forecastData = await fetchForecast(location);
  // break down all of that info into necessary info
  const forecastObject = {
    // data for main section
    loc: forecastData.location.name,
    tempF: forecastData.current.temp_f,
    tempC: forecastData.current.temp_c,
    cond: forecastData.current.condition.text,
    condIcon: forecastData.current.condition.icon,

    // data for details section
    feelF: forecastData.current.feelslike_f,
    feelC: forecastData.current.feelslike_c,
    humid: forecastData.current.humidity,
    pressure: forecastData.current.pressure_mb,
  };
  return forecastObject;
}

// key info

//  location name
//             temperature
//             hi and low temperature
//             general condition (i.e sunny, raining)
//  condition icon

//         extra info
//             humidity
//             feels like temp (both c and f)
//             percent chance of rain
//   pressure
// wind direction and speed (in mph)
