import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!userInput) return;

    (async () => {
      setCity(await getCityData(userInput));
    })();
  }, [userInput]);

  useEffect(() => {
    if (!city) return;

    setForecasts(
      city.list.reduce<IDayForecast[]>((sortedForecast, forecast) => {
        const date = new Date(forecast.dt_txt);

        let currentForecastDate = sortedForecast.find(
          dayForecast =>
            dayForecast.date.getDate() === date.getDate() &&
            dayForecast.date.getMonth() === date.getMonth() &&
            dayForecast.date.getFullYear() === date.getFullYear()
        );

        if (!currentForecastDate) {
          const forecastDateIndex = sortedForecast.push({
            date,
            humidity: forecast.main.humidity,
            forecast: [],
          });

          currentForecastDate = sortedForecast[forecastDateIndex - 1];
        } else {
          currentForecastDate.humidity =
            (currentForecastDate.humidity + forecast.main.humidity) / 2;
        }

        currentForecastDate.forecast.push(forecast);

        return sortedForecast;
      }, [])
    );
  }, [city]);

  return (
    <Card className={styles["flex-container"]}>
      <aside>
        <UserInput changeCity={setUserInput} />
        <DetailCard />
      </aside>

      <section className={styles["main-container"]}>
        <LineChart data={forecasts} />
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
