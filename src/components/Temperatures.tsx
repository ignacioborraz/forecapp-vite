import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Temperatures() {
  const main = useSelector((state: RootState) => state.reducer.weather.main);
  return (
    <span className="text-[18px] flex flex-col justify-center items-center">
      <span className="text-[15px] text-center">
        feels like {main.feels_like.toFixed()}°C
      </span>
      <span className="text-[15px] text-center">
        min {main.temp_min.toFixed()}°C / max {main.temp_max.toFixed()}°C
      </span>
    </span>
  );
}
