import City from "../interfaces/city";
import CityFound from "./CityFound";

type Props = {
  cities: City[];
};

export default function Cities(props: Props) {
  return (
    <span className="flex flex-col w-full">
      {props.cities.length > 0 &&
        props.cities.map((each, index) => (
          <CityFound key={index} city={each} />
        ))}
      {!props.cities[1] && (
        <span className="bg-white w-full h-[50px] rounded mt-2 text-[14px] flex justify-center items-center text-blue-950">
          ...
        </span>
      )}
      {!props.cities[2] && (
        <span className="bg-white w-full h-[50px] rounded mt-2 text-[14px] flex justify-center items-center text-blue-950">
          No more matches!
        </span>
      )}
    </span>
  );
}
