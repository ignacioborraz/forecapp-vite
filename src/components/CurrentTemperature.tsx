import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import WeatherIcon from "./WeatherIcon";
import { Weather, Main } from "../interfaces/json";

type Props = {
  main?: Main;
  weather?: Weather[];
};

export default function CurrentTemperature({ main, weather }: Props) {
  const mainStore = useSelector(
    (state: RootState) => state.reducer.weather.main
  );
  const weatherStore = useSelector(
    (state: RootState) => state.reducer.weather.weather
  );
  const dataMain = main || mainStore;
  const dataWeather = weather || weatherStore;

  return (
    <span className="w-full flex justify-center pl-[25px]">
      {dataMain.temp.toFixed()}°C{" "}
      <WeatherIcon size={75} iconCode={dataWeather[0].icon} />
    </span>
  );
}
