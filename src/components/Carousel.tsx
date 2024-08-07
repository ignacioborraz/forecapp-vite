import Box from "./Box";
import Arrows from "./Arrows";
import CurrentTemperature from "./CurrentTemperature";
import Temperatures from "./Temperatures";
import ForecastTable from "./ForecastTable";
import Button from "./Button";
import WeatherResponse from "../interfaces/json";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetData } from "../store/actions";

type Props = {
  data: WeatherResponse[];
  slide: number;
  setSlide: Dispatch<SetStateAction<number>>;
};

export default function Carousel({ data, slide, setSlide }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
    dispatch(resetData());
  };
  return (
    <Box title={data[slide].name || ""} relative={true}>
      <Arrows slide={slide} setSlide={setSlide} length={data.length} />
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
  );
}
