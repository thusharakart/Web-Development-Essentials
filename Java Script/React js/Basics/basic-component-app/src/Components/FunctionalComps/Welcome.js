import React from "react";

export default function Welcome(props) {
	return (
		<div>
			<h1>Hello {props.name}</h1>
			<h2>{props.message}</h2>
		</div>
	);
}
