import React, { useState } from "react";
import UserInput from "./UserInput";
import DetailCard from "./mainCard/DetailCard";

export default function App() {
	const [city, setCity] = useState("");
	console.log(city);
	return (
		<>
			<UserInput changeCity={setCity} />
			<DetailCard />
		</>
	);
}
