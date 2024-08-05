import { createReducer } from "@reduxjs/toolkit";
import { getCities, getForecast } from "./actions";
import City from "../interfaces/city";
import WeatherResponse from "../interfaces/json";

type State = {
  text: string;
  cities: Array<City>;
  weather: WeatherResponse;
};

const initialState: State = {
  text: "",
  cities: [],
  weather: {
    weather: [{
      main: "",
      description: "",
      icon: "",
    }],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0,
      sea_level: 0,
      grnd_level: 0,
    },
    name: "",
    dt: 0,
    sys: {
      sunrise: 0,
      sunset: 0,
    },
    forecast: [],
  },
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCities.fulfilled, (state, action) => {
      const newState = { ...state };
      if (action.payload.cities.length > 0 && action.payload.text) {
        newState.text = action.payload.text;
        newState.cities = action.payload.cities.map((each) => ({
          name: each.name,
          country: each.country,
          state: each.state,
          lat: each.lat,
          lon: each.lon,
        }));
      } else if (action.payload.cities.length === 0 && action.payload.text) {
        newState.text = action.payload.text;
      } else {
        newState.text = "";
        newState.cities = [];
      }
      return newState;
    })
    .addCase(getForecast.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.weather = {
        weather: [{
          main: action.payload.weather.weather[0].main,
          description: action.payload.weather.weather[0].description,
          icon: action.payload.weather.weather[0].icon,
        }],
        main: action.payload.weather.main,
        name: action.payload.city,
        dt: action.payload.weather.dt,
        sys: {
          sunrise: action.payload.weather.sys.sunrise,
          sunset: action.payload.weather.sys.sunset,
        },
        forecast: [
          action.payload.forecast[8],
          action.payload.forecast[16],
          action.payload.forecast[24],
        ],
      };
      return newState;
    })
);

export default reducer;
