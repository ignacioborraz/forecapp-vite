import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Main } from "../interfaces/json";

type Props = {
  main?: Main;
};

export default function Temperatures({ main }: Props) {
  const mainStore = useSelector(
    (state: RootState) => state.reducer.weather.main
  );
  const data = main || mainStore;
  return (
    <span className="w-[full text-[18px] flex flex-col justify-center items-center">
      <span className="w-[full text-[15px] text-center">
        feels like {data.feels_like.toFixed()}°C
      </span>
      <span className="w-[full text-[15px] text-center">
        min {data.temp_min.toFixed()}°C / max {data.temp_max.toFixed()}°C
      </span>
    </span>
  );
}
