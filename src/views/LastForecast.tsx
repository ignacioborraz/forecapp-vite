import { useEffect, useState } from "react";
import WeatherResponse from "../interfaces/json.ts";
import getBackgroundClass from "../utils/bg.ts";
import NotFound from "../components/NotFound.tsx";
import Carousel from "../components/Carousel.tsx";
import now from "../utils/now.ts";
import time from "../utils/time.ts";

function LastForecast() {
  const [backgroundClass, setBackgroundClass] = useState("");
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState<WeatherResponse[]>([]);
  useEffect(() => {
    const dataStorage = JSON.parse(
      localStorage.getItem("data") || "[]"
    ).reverse();
    setData(dataStorage);
    const weather = dataStorage[slide]?.weather[0].main;
    const timeHours = time(dataStorage[slide]);
    setBackgroundClass(
      getBackgroundClass(
        weather,
        now(timeHours.time, timeHours.sunrise, timeHours.sunset)
      )
    );
  }, [slide]);

  return (
    <main
      className={`bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-end items-center text-shadow-xl ${backgroundClass}`}
    >
      {data.length === 0 ? (
        <NotFound />
      ) : (
        <Carousel data={data} slide={slide} setSlide={setSlide} />
      )}
    </main>
  );
}

export default LastForecast;
