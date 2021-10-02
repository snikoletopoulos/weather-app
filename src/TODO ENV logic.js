/* esling-disable */
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

import axios from "axios";
require("dotenv").config();

export async function getCityData(city) {
	console.log(process);
	const data = await axios.get(
		`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
	);
	console.log(data);
}
