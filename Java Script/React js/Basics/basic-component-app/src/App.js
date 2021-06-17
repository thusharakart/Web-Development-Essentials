import React from "react";
import "./App.css";
import { Click } from "./Components/ClassComps/Click";
import Display from "./Components/FunctionalComps/Display";

function App() {
	return (
		<div className="App">
			<Display />
			<Click />
		</div>
	);
}

export default App;
