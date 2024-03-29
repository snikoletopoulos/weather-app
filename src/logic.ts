import axios from "axios";
import { ICountryForecast } from "./types/api-types";

export const getCityData: cityData = async city => {
	const response = await axios.get<ICountryForecast>(
		`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${
			import.meta.env.VITE_API_KEY
		}`
	);

	return response.data;
};

type cityData = (cityId: string) => Promise<ICountryForecast>;

export const userLocation = (successCallback: any, errorCallback: any = null) => {
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
		enableHighAccuracy: true,
	});
};
