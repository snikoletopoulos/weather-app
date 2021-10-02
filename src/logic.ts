import axios from "axios";

export async function getCityData(city: string): Promise<unknown | number> {
	const response = await axios.get(
		`api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e64ecf00c430c2fb61818892d6f7f37`
	);
	console.log(response);
	if (response.status === 200) {
		return response.data;
	} else {
		return { error: response.status };
	}
}
