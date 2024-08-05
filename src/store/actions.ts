import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { geoApiUrl, weatherApiUrl, apikey } from "../utils/env.ts";
import City from "../interfaces/city";

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

const getForecast = createAsyncThunk("selectCity", async (query: string) => {
  try {
    const response = await axios.get(
      `${weatherApiUrl}/forecast?${query}&lang=es&units=metric&appid=${apikey}`
    );
    return { city: response.data.city, list: response.data.list };
  } catch (error) {
    console.error(error);
    return { cities: [] };
  }
});

export { getCities, getForecast };
