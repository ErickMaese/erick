import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Hero4 from "../assets/hero4.jpg";
import Form from "../components/Form";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2
				img={Hero4}
				heading="Contact"
				text="Let's chat"
			/>
			<Form/>
			<Footer />
		</div>
	);
};

export default Contact;
