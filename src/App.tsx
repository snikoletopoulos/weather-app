import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import "global.css";

import { ICountryForecast } from "types/api-types";
import { getCityData } from "logic";

import Card from "components/UI/Card";
import DayCards from "components/detailArea/DayCards";
import UserInput from "components/selectedDay/UserInput";
import DetailCard from "components/selectedDay/DetailCard";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [city, setCity] = useState<ICountryForecast | null>(null);

  useEffect(() => {
    if (!userInput) return;

    (async () => {
      setCity(await getCityData(userInput));
    })();
  }, [userInput]);

  return (
    <Card className={styles["flex-container"]}>
      <aside>
        <UserInput changeCity={setUserInput} />
        <DetailCard />
      </aside>

      <section className={styles["main-container"]}>
        <DayCards />
      </section>
    </Card>
  );
};

export default App;
