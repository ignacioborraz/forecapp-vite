import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemperature() {
  const main = useSelector((state: RootState) => state.reducer.weather.main);
  const weather = useSelector(
    (state: RootState) => state.reducer.weather.weather
  );
  //console.log({ main, weather });

  return (
    <span className="flex pl-[25px]">
      {main.temp.toFixed()}°C{" "}
      <WeatherIcon size={75} iconCode={weather[0].icon} />
    </span>
  );
}
