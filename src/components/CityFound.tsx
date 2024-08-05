import { Link } from "react-router-dom";
import City from "../interfaces/city";

type Props = {
  city: City;
};

export default function CityFound(props: Props) {
  return (
    <Link
      to={`/${props.city.name}/${props.city.lat}/${props.city.lon}`}
      className="flex flex-col justify-center items-center p-2 bg-white w-full h-[50px] rounded mt-2 cursor-pointer text-blue-950 hover:bg-slate-100"
    >
      <p className="text-[16px]">{props.city.name}</p>
      <p className="text-[10px]">
        {props.city.country} - {props.city.state}
      </p>
    </Link>
  );
}
