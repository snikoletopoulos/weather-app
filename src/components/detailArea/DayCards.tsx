import React from "react";
import styles from "./DayCards.module.css";

import { ICountryForecast } from "@/types/api-types";
import { IDayForecast } from "@/App";

import Card from "@/components/UI/Card";
import Icon from "@/components/UI/Icon";

const activeDay = 1;

const isToday = (forecast: IDayForecast) => {
  const today = new Date();

  return (
    forecast.date.getDate() === today.getDate() &&
    forecast.date.getMonth() === today.getMonth() &&
    forecast.date.getFullYear() === today.getFullYear()
  );
};

const DayCards: React.FC<Props> = props => (
  <div className={`${styles["summary"]}`}>
    {props.forecasts.map((forecast: IDayForecast) => {
      let title = forecast.date.toLocaleString("en-EN", {
        month: "short",
        day: "numeric",
      });

      if (isToday(forecast)) {
        title = "Today";
      }

      return (
        <Card
          key={`${forecast.date.getMonth()}-${forecast.date.getDate()}`}
          className={`${styles["summary__card"]} ${
            isToday(forecast) ? styles["summary__card--active"] : ""
          }`}
        >
          <div>{title}</div>
          <Icon icon="10d" />
          <p>Humidity</p>
          <p>{forecast.humidity.toFixed(1)}%</p>
        </Card>
      );
    })}
  </div>
);

export default DayCards;

interface Props {
  forecasts: IDayForecast[];
}
