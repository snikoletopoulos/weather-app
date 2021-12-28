import React, { useState } from "react";
import Select from "react-select";
import UserInput from "./components/mainCard/UserInput";
import DetailCard from "./components/mainCard/DetailCard";
import "./global.css";

const App = () => {
  const [city, setCity] = useState("");
  console.log(city);

  return (
    <main>
      <aside>
        <UserInput changeCity={setCity} />
        <Select />
        <DetailCard />
      </aside>
      <section>Loading...</section>
    </main>
  );
};

export default App;
