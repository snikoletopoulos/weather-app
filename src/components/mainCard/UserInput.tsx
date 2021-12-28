import React from "react";
import Select from "react-select";

import { ICountryForecast } from "types/api-types";

const UserInput = ({ changeCity }: Props) => {
  const handleSubmit = () => {
    changeCity(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Your city</label>
      <Select />
    </form>
  );
};

export default UserInput;

interface Props {
  changeCity: React.Dispatch<React.SetStateAction<string>>;
}
