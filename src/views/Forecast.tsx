import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getForecast } from "../store/actions";
import Box from "../components/Box";
import ForecastTable from "../components/ForecastTable";
import Temperature from "../components/Temperature";

function Forecast() {
  const { city, lat, lon } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    findForecast(`lat=${lat}&lon=${lon}`, city || "");
  }, [city, lat, lon]);
  const findForecast = async (query: string, city: string) => {
    await dispatch(getForecast({ query, city }));
  };

  return (
    <Box title={city || ""}>
      <Temperature />
      <ForecastTable />
    </Box>
  );
}

export default Forecast;
