import React, { useState } from "react";
import styles from "./App.module.css";
import "global.css";

import { ICountryForecast } from "types/api-types";

import Card from "components/UI/Card";
import DayCards from "components/detailArea/DayCards";
import UserInput from "components/selectedDay/UserInput";
import DetailCard from "components/selectedDay/DetailCard";

const App = () => {
  const [city, setCity] = useState<string>("");
  console.log(city);

  return (
    <Card className={styles["flex-container"]}>
      <aside>
        <UserInput changeCity={setCity} />
        <DetailCard />
      </aside>

      <section className={styles["main-container"]}>
        <DayCards />
      </section>
    </Card>
  );
};

export default App;
