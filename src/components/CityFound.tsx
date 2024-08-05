import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getForecast } from "../store/actions";
import City from "../interfaces/city";

type Props = {
  city: City;
};

export default function CityFound(props: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const findForecast = async (text: string) => {
    dispatch(getForecast(text));
  };
  return (
    <span
      className="flex flex-col justify-center items-center p-2 bg-white w-full h-[50px] rounded mt-2 cursor-pointer text-blue-950 hover:bg-slate-100"
      onClick={() =>
        findForecast(`lat=${props.city.lat}&lon=${props.city.lon}`)
      }
    >
      <p className="text-[16px]">{props.city.name}</p>
      <p className="text-[10px]">
        {props.city.country} - {props.city.state}
      </p>
    </span>
  );
}
