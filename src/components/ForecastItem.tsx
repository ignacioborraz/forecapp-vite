import { List } from "../interfaces/json";
import WeatherIcon from "./WeatherIcon";

type Props = {
  each: List;
  index: number;
};

export default function ForecastItem({ each, index }: Props) {
  const getDayName = (date: Date) => {
    return date.toLocaleDateString("en-EN", { weekday: "long" });
  };
  const getNextDay = (currentDate: Date, daysToAdd: number) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + daysToAdd);
    return getDayName(nextDate);
  };

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
