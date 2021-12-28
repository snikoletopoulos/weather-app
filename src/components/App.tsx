import React, { useState } from "react";
import Select from "react-select";
import UserInput from "./mainCard/UserInput";
import DetailCard from "./mainCard/DetailCard";

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
