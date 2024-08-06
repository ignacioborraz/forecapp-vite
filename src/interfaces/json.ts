export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Sys {
  sunrise: number;
  sunset: number;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather;
  temp?: number;
  icon?: string;
}

export default interface WeatherResponse {
  weather: Weather[];
  main: Main;
  name: string;
  dt: number;
  sys: Sys;
  forecast: List[];
}
