import WeatherResponse from "../interfaces/json";

function time(data: WeatherResponse) {
  const time = data?.dt;
  const sunrise = data?.sys.sunrise;
  const sunset = data?.sys.sunset;
  return { time, sunrise, sunset };
}

export default time;
