import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Input from "./components/Input";
import CityLoaders from "./components/CityLoaders";
import Cities from "./components/Cities";

function App() {
  const cities = useSelector((state: RootState) => state.reducer.cities);
  const text = useSelector((state: RootState) => state.reducer.text);
  const list = useSelector((state: RootState) => state.reducer.list);
  //console.log(cities);
  //console.log(text);
  console.log(list);
  
  return (
    <main className="bg-generico md:bg-genericohd bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-end items-center">
      <h2 className="text-blue-900 font-dancing text-[75px] font-black">PronostiApp</h2>
      <span className="flex flex-col justify-start items-center bg-blue-100 p-2 rounded mb-[50px]">
        <Input />
        <span className="w-full flex justify-between">
          {text === "" ? <CityLoaders /> : <Cities cities={cities} />}
        </span>
      </span>
    </main>
  );
}

export default App;
