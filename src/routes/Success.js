import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Hero4 from "../assets/hero4.jpg";

const Success = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				img={Hero4}
				heading="Thanks!"
				text="The form was subitted successfully"
			/>
			<Footer />
		</div>
	);
};

export default Success;
