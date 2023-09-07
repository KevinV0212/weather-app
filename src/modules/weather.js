async function fetchWeather(location) {
  const key = "85bcb1e0a30e45d191242644230309";
  const request = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`;
  const response = await fetch(request);
  return response.json();
}

// returns object with info about weather at [location]
export async function getWeather(location) {
  // call fetch weather based on location
  const weatherData = await fetchWeather(location);
  // break down all of that info into necessary info
  const weatherObject = {
    loc: weatherData.location.name,
    cond: weatherData.current.condition.text,
    condIcon: weatherData.current.condition.icon,
    tempF: weatherData.current.temp_f,
    tempC: weatherData.current.temp_c,
    humid: weatherData.current.humidity,
  };
  return weatherObject;
}
