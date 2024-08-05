import { RootState } from "../store/store"; // Ajusta la ruta según sea necesario
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Main() {
  const weather = useSelector(
    (state: RootState) => state.reducer.weather.weather[0].main
  );
  const time = useSelector((state: RootState) => state.reducer.weather.dt);
  const sunset = useSelector(
    (state: RootState) => state.reducer.weather.sys.sunset
  );
  const sunrise = useSelector(
    (state: RootState) => state.reducer.weather.sys.sunrise
  );

  const now = (): boolean => {
    const isDayTime = time >= sunrise && time <= sunset;
    return isDayTime;
  };

  return (
    <main
      className={`bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-end items-center text-shadow-xl
  ${
    weather === "Clouds"
      ? "bg-nublado md:bg-nubladohd"
      : weather === "Snow"
      ? "bg-nieve md:bg-nievehd"
      : weather === "Rain"
      ? "bg-lluvia md:bg-lluviahd"
      : weather === "Clear"
      ? now()
        ? "bg-dia md:bg-diahd"
        : "bg-noche md:bg-nochehd"
      : "bg-generico md:bg-genericohd"
  }
  `}
    >
      <Outlet />
    </main>
  );
}
