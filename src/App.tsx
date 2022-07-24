import { useState, useEffect } from "react";
import styles from "@/App.module.css";
import "@/global.css";

import { ICountryForecast, DayEntry } from "@/types/api-types";
import { getCityData, userLocation } from "@/logic";

import Card from "@/components/UI/Card";
import DayCards from "@/components/detailArea/DayCards";
import UserInput from "@/components/selectedDay/UserInput";
import DetailCard from "@/components/selectedDay/DetailCard";
import LineChart from "@/components/chart/LineChart";

const App = () => {
	const [userInput, setUserInput] = useState("Athens");
	const [city, setCity] = useState<ICountryForecast | null>(null);
	const [forecasts, setForecasts] = useState<IDayForecast[]>([]);

	return (
		<Card className={styles["flex-container"]}>
			<aside>
				<UserInput changeCity={setUserInput} />
				<DetailCard />
			</aside>

			<section className={styles["main-container"]}>
				{/* <LineChart data={forecasts} /> */}
				<DayCards forecasts={forecasts} />
			</section>
		</Card>
	);
};

export default App;

export interface IDayForecast {
	date: Date;
	humidity: number;
	forecast: DayEntry[];
}
