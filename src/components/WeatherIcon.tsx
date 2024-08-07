type Props = {
  iconCode: string;
  size: number;
};

function WeatherIcon(props: Props) {
  const iconUrl = `http://openweathermap.org/img/wn/${props.iconCode}.png`;
  return (
    <img
      className={`h-[${props.size}px] object-contain`}
      src={iconUrl}
      alt="icon"
    />
  );
}

export default WeatherIcon;
