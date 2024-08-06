import { useDispatch } from "react-redux";
import { getCities } from "../store/actions";
import { AppDispatch } from "../store/store";

export default function Input() {
  const dispatch = useDispatch<AppDispatch>();
  const findCity = async (text: string) => {
    dispatch(getCities(text));
  };

  return (
    <input
      type="text"
      name="city"
      id="city"
      onChange={(event) => findCity(event.target.value)}
      className="h-[40px] w-[340px] p-2 rounded mt-2 text-center animate-bounce focus:animate-none text-slate-950"
      placeholder="search for a city"
    />
  );
}
