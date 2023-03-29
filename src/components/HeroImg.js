import "./HeroImgStyles.css";
import HomeImg from "../assets/hero.jpg"
import { Link } from "react-router-dom";

import React from "react";

const HeroImg = () => {
	return <div className="hero">
        <div className="mask">
            <img className="into-img" src={HomeImg} alt="HomeImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm a Front-End </p>
            <h1>Software Engineer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>;
};

export default HeroImg;
