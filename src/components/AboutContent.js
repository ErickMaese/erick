import "./AboutContentStyles.css";
import { Link } from "react-router-dom";

import React from "react";
import Img1 from "../assets/react2.png";
import Img2 from "../assets/react3.jpg";
import ErickImg from "../assets/erick.jpg";

const AboutContent = () => {
	return (
		<div className="about">
			<div>
				<img className="erick-img" src={ErickImg} alt="true" />
			</div>
			<div>
				<div className="left">
					<h1>Who am I</h1>
					<p>
						Full Stack Software Engineer experienced in building applications
						with JavaScript (ES6+), React, Node, Express, and relational
						databases. Active open-source contributor, creating tools that solve
						problems and improve client experience.
					</p>
					<Link to="/contact">
						<button className="btn">Contact</button>
					</Link>
				</div>
				<div className="right">
					<div className="img-contanier" id="img-container">
						<div className="img-stack top">
							<img src={Img1} className="img" alt="img" />
						</div>
						<div className="img-stack bottom">
							<img src={Img2} className="img" alt="img" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
