import { List } from "../interfaces/json";
import getNextDay from "../utils/getNextDay";
import WeatherIcon from "./WeatherIcon";

type Props = {
  each: List;
  index: number;
};

export default function ForecastItem({ each, index }: Props) {
  return (
    <span
      key={index}
      className="w-[110px] flex flex-col justify-center items-center text-[15px]"
    >
      <p className="w-fullflex justify-center items-center">
        {getNextDay(new Date(), index + 1)}
      </p>
      <p className="w-full flex justify-center items-center pl-[15px]">
        {each.temp?.toFixed() || ""}°C
        <WeatherIcon size={15} iconCode={each.icon || ""} />
      </p>
    </span>
  );
}
