import "./HeroImg2Styles.css";


import React, { Component } from "react";

class HeroImg2 extends Component {
	render() {
		return (
			<div className="hero-project">
				<div className="mask-project">
					<img className="hero-img" src={this.props.img}  alt="HeroImg" />
				</div>
				<div className="content-project">
					<h2>{this.props.heading}</h2>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default HeroImg2;
