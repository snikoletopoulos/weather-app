import axios from "axios";
import { ICountryForecast } from "./types/api-types";

export const getCityData: cityData = async cityId => {
  const response = await axios.get<ICountryForecast>(
    `api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.REACT_APP_API_KEY}`
  );
  console.log(response);

  return response.data;
};

type cityData = (cityId: number) => Promise<ICountryForecast>;
