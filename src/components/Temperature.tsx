import CurrentTemperature from "./CurrentTemperature";
import Temperatures from "./Temperatures";

export default function Temperature() {
  return (
    <span className="w-[340px] text-[50px] flex flex-col justify-center items-center">
      <CurrentTemperature />
      <Temperatures />
    </span>
  );
}
