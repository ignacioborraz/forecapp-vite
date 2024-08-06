import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { geoApiUrl, weatherApiUrl, apikey } from "../utils/env.ts";
import City from "../interfaces/city";
import WeatherResponse from "../interfaces/json.ts";

const getCities = createAsyncThunk("getCities", async (city: string) => {
  try {
    if (city) {
      const response = await axios.get<City[]>(
        `${geoApiUrl}/direct?q=${city}&limit=3&appid=${apikey}`
      );
      return { text: city || "", cities: response.data };
    } else {
      return { text: city || "", cities: [] };
    }
  } catch (error) {
    console.error(error);
    return { cities: [] };
  }
});

type Obj = {
  query: string;
  city: string;
};
const getForecast = createAsyncThunk("selectCity", async (obj: Obj) => {
  try {
    const weather = await axios.get(
      `${weatherApiUrl}/weather?&${obj.query}&units=metric&appid=${apikey}`
    );
    const forecast = await axios.get(
      `${weatherApiUrl}/forecast?${obj.query}&units=metric&appid=${apikey}`
    );
    return {
      weather: weather.data,
      forecast: forecast.data.list.map((each: WeatherResponse) => ({
        icon: each.weather[0].icon || "",
        temp: each.main.temp,
      })),
      city: obj.city,
    };
  } catch (error) {
    console.error(error);
    return {
      weather: null,
      city: "",
      forecast: [],
    };
  }
});
const resetData = createAction("resetData");

export { getCities, getForecast, resetData };
