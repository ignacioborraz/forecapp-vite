import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getForecast } from "../store/actions";
import Box from "../components/Box";
import Buttons from "../components/Buttons.tsx";
import ForecastTable from "../components/ForecastTable";
import Temperature from "../components/Temperature";
import WeatherResponse from "../interfaces/json.ts";

function Forecast() {
  const { city, lat, lon } = useParams();
  const weather = useSelector((state: RootState) => state.reducer.weather);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    findForecast(`lat=${lat}&lon=${lon}`, city || "");
  }, [city, lat, lon]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    if (weather.name) {
      const includes = data.find(
        (each: WeatherResponse) => each.name === weather.name
      );
      !includes && data.push(weather);
      if (data.length === 4) {
        data.shift();
      }
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [weather]);
  const findForecast = async (query: string, city: string) => {
    await dispatch(getForecast({ query, city }));
  };

  return (
    <Box title={city || ""} relative={false}>
      <Temperature />
      <ForecastTable />
      <Buttons />
    </Box>
  );
}

export default Forecast;
