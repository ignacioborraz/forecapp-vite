const now = (time: number, sunrise: number, sunset: number): boolean => {
  const isDayTime = time >= sunrise && time <= sunset;
  return isDayTime;
};

export default now;
