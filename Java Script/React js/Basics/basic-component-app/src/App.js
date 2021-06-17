import React from "react";
import "./App.css";
import { Click } from "./Components/ClassComps/Click";
import Display from "./Components/FunctionalComps/Display";
import Welcome from "./Components/FunctionalComps/Welcome";

function App() {
	const messages = {
		title: "welcome to the system!",
	};

	return (
		<div className="App">
			<Display />
			<Click />
			<Welcome name="Rusiru" message={messages.title} />
		</div>
	);
}

export default App;
