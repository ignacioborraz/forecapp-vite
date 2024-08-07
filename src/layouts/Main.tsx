import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import getBackgroundClass from "../utils/bg";

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
  const isDayTime = time >= sunrise && time <= sunset;
  const backgroundClass = getBackgroundClass(weather, isDayTime);

  return (
    <main
      className={`bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-end items-center text-shadow-xl ${backgroundClass}`}
    >
      <Outlet />
    </main>
  );
}
