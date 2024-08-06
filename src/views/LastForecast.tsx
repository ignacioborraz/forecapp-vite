import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetData } from "../store/actions.ts";
import WeatherResponse from "../interfaces/json.ts";
import Box from "../components/Box.tsx";
import Button from "../components/Button.tsx";
import Arrows from "../components/Arrows.tsx";
import ForecastTable from "../components/ForecastTable.tsx";
import CurrentTemperature from "../components/CurrentTemperature.tsx";
import Temperatures from "../components/Temperatures.tsx";

function LastForecast() {
  const [data, setData] = useState<WeatherResponse[]>([]);
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data") || ""));
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
    dispatch(resetData());
  };

  return (
    data[slide] && (
      <Box title={data[slide].name || ""} relative={true}>
        <Arrows slide={slide} setSlide={setSlide} />
        <span className="w-[340px] text-[50px] flex flex-col justify-center items-center">
          <CurrentTemperature
            main={data[slide].main}
            weather={data[slide].weather}
          />
          <Temperatures main={data[slide].main} />
        </span>
        <ForecastTable forecast={data[slide].forecast} />
        <Button
          onClick={goBack}
          text="search cities!"
          wClass="w-[340px]"
          relative={true}
        />
      </Box>
    )
  );
}

export default LastForecast;
