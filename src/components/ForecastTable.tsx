import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ForecastItem from "./ForecastItem";

export default function ForecastTable() {
  const forecast = useSelector(
    (state: RootState) => state.reducer.weather.forecast
  );

  return (
    <span className="text-[18px] flex flex-col justify-center items-center mt-[10px]">
      <h3>Tomorrow's temperature:</h3>
      <span className="flex">
        {forecast.map((each, index) => (
          <ForecastItem each={each} index={index} key={index} />
        ))}
      </span>
    </span>
  );
}
