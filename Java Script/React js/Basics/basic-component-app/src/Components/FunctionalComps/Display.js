import React, { useState } from "react";

export default function Display() {
	const [name, setName] = useState("");

	return (
		<div>
			<h3>Enter your name : </h3>
			<input onChange={(x) => setName(x.target.value)} />
			<p>Hi {name}, how are you?</p>
		</div>
	);
}
