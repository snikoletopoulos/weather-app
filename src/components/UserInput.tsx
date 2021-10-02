import React, { useState } from "react";
import { getCityData } from "../logic";

export default function UserInput({ changeCity }) {
	const [typing, setTyping] = useState("");

	function handleChange(e) {
		setTyping(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		changeCity(typing);
		alert(await getCityData("Athens"));
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="city">Your city</label>
			<input
				id="city"
				type="search"
				name="city"
				placeholder="Type your city"
				value={typing}
				onChange={handleChange}
			/>
		</form>
	);
}
