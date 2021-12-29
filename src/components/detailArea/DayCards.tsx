import React from "react";
import styles from "./DayCards.module.css";

import Card from "components/UI/Card";

const activeDay = 1;
const DayCards = () => {
  return (
    <div className={`${styles["summary"]}`}>
      <Card className={`${styles["summary__card"]} ${activeDay === 1 ? styles['summary__card--active'] : ''}`}>
        <div>Today</div>
        Icon
        <p>Humidity</p>
        <p>30%</p>
      </Card>
      <Card className={styles["summary__card"]}>
        <div>Today</div>
        Icon
        <p>Humidity</p>
        <p>30%</p>
      </Card>
      <Card className={styles["summary__card"]}>
        <div>Today</div>
        Icon
        <p>Humidity</p>
        <p>30%</p>
      </Card>
      <Card className={styles["summary__card"]}>
        <div>Today</div>
        Icon
        <p>Humidity</p>
        <p>30%</p>
      </Card>
    </div>
  );
};

export default DayCards;
