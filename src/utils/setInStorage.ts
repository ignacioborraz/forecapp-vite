import WeatherResponse from "../interfaces/json";

function setInStorage(weather: WeatherResponse, data: WeatherResponse[]) {
  if (weather.name) {
    const includes = data.find(
      (each: WeatherResponse) => each.name === weather.name
    );
    !includes && data.push(weather);
    if (data.length === 4) {
      data.shift();
    }
    localStorage.setItem("data", JSON.stringify(data));
  }
}

export default setInStorage;
