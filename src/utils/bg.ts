const getBackgroundClass = (weather: string, isDayTime: boolean): string => {
  switch (weather) {
    case "Clouds":
      return "bg-nublado md:bg-nubladohd";
    case "Snow":
      return "bg-nieve md:bg-nievehd";
    case "Rain":
      return "bg-lluvia md:bg-lluviahd";
    case "Clear":
      return isDayTime ? "bg-dia md:bg-diahd" : "bg-noche md:bg-nochehd";
    default:
      return "bg-generico md:bg-genericohd";
  }
};

export default getBackgroundClass;
