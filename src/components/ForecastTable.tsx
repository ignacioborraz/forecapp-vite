import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ForecastItem from "./ForecastItem";
import { List } from "../interfaces/json";

type Props = {
  forecast?: List[];
};

export default function ForecastTable({ forecast }: Props) {
  const forecastStore = useSelector(
    (state: RootState) => state.reducer.weather.forecast
  );
  const data = forecast || forecastStore;

  return (
    <span className="w-[340px] text-[18px] flex flex-col justify-center items-center mt-[10px]">
      <h3>Tomorrow's temperature:</h3>
      <span className="flex">
        {data.map((each, index) => (
          <ForecastItem each={each} index={index} key={index} />
        ))}
      </span>
    </span>
  );
}
