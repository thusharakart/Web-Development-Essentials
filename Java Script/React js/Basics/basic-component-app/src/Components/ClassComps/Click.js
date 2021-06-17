import React, { Component } from "react";
import bell0 from "../../static/resources/images/bell0.png";
import bell1 from "../../static/resources/images/bell1.png";

export class Click extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Subcribe to STERNX",
			sub: "Subcribe",
			imageUrl: bell0,
		};
	}
	buttonClick = () => {
		this.setState({
			message: "Hit the bell icon",
			sub: "Subscribed",
		});
	};
	imageClick = () => {
		this.setState({
			message: "Thank you!",
			imageUrl: bell1,
		});
	};
	render() {
		return (
			<div>
				<h3>{this.state.message}</h3>
				<button onClick={this.buttonClick}>{this.state.sub}</button>
				<p />
				<img
					style={{ height: "30px", width: "30px" }}
					src={this.state.imageUrl}
					alt=""
					onClick={this.imageClick}
				/>
			</div>
		);
	}
}
