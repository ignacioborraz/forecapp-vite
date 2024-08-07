import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getForecast } from "../store/actions";
import Box from "../components/Box";
import Buttons from "../components/Buttons.tsx";
import ForecastTable from "../components/ForecastTable";
import Temperature from "../components/Temperature";
import setInStorage from "../utils/setInStorage.ts";

function Forecast() {
  const { city, lat, lon } = useParams();
  const weather = useSelector((state: RootState) => state.reducer.weather);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getForecast({ query: `lat=${lat}&lon=${lon}`, city: city || "" }));
  }, [city, lat, lon]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setInStorage(weather, data);
  }, [weather]);

  return (
    <Box title={city || ""} relative={false}>
      <Temperature />
      <ForecastTable />
      <Buttons />
    </Box>
  );
}

export default Forecast;
