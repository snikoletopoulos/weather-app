import React, { useState } from "react";
import UserInput from "components/selectedDay/UserInput";
import DetailCard from "components/selectedDay/DetailCard";
import { ICountryForecast } from "types/api-types";
import styles from "./App.module.css";
import "global.css";

const App = () => {
  const [city, setCity] = useState<ICountryForecast | null>(null);
  console.log(city);

  return (
    <main className={styles['card']}>
      <aside>
        <UserInput changeCity={setCity} />
        <DetailCard />
      </aside>
      <section>Loading...</section>
    </main>
  );
};

export default App;
