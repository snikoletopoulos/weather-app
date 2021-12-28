import React from "react";
import { getCityData } from "../../logic";

const UserInput = ({ changeCity }: Props) => {
  const [typing, setTyping] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTyping(event.target.value);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    changeCity(typing);
    await getCityData("Athens");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">Your city</label>
      <input
        type="search"
        name="city"
        placeholder="Type your city"
        value={typing}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserInput;

interface Props {
  changeCity: React.Dispatch<React.SetStateAction<string>>;
}
