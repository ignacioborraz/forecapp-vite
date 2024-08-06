import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CityLoaders from "../components/CityLoaders";
import Cities from "../components/Cities";

export default function CitiesTable() {
  const cities = useSelector((state: RootState) => state.reducer.cities);
  const text = useSelector((state: RootState) => state.reducer.text);
  //console.log(cities);
  //console.log(text);

  return (
    <span className="w-[340px] flex justify-between">
      {text === "" ? <CityLoaders /> : <Cities cities={cities} />}
    </span>
  );
}
