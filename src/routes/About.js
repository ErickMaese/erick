import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import HeroImg from "../assets/hero3.jpg";
import AboutContent from "../components/AboutContent";

const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				img={HeroImg}
				heading="About me"
				text="I'm a Front-End Software Engineer"
			/>
			<AboutContent />
			<Footer />
		</div>
	);
};

export default About;
