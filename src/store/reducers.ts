import { createReducer } from "@reduxjs/toolkit";
import { getCities, getForecast } from "./actions";
import City from "../interfaces/city";
import WeatherResponse from "../interfaces/json";

type State = {
  text: string;
  cities: Array<City>;
  city: City;
  list: Array<WeatherResponse>
};

const initialState: State = {
  text: "",
  cities: [],
  city: {
    name: "",
    country: "",
    state: "",
    lat: 0,
    lon: 0,
  },
  list: []
};

const reducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getCities.fulfilled, (state, action) => {
      let newState = { ...state };
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
      let newState = {
        ...state,
        city: action.payload.city,
        list: action.payload.list,
      };
      return newState;
    })
);

export default reducer;
