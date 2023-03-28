import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Hero5 from "../assets/hero5.jpg";
import Work from "../components/Work";


const Project = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				img={Hero5}
				heading="Projects"
				text="Some of my most recent work"
			/>
			<Work/>
			<Footer />
		</div>
	);
};

export default Project;
