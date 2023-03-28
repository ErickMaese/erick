import "./FormStyles.css";

import React from "react";

const Form = () => {
	return (
		<div className="form">
			<form action="https://formsubmit.co/maese99@gmail.com" method="POST">
				{/* honeypot */}
				<input type="text" name="_honey" style={{ display: "none" }} />

				{/* Disable Captcha */}
				<input type="hidden" name="_captcha" value="false" />

				{/* submition success link */}
				<input
					type="hidden"
					name="_next"
					value="http://erickmaese.github.io/success"
				/>

				<label>Your Name</label>
				<input type="text" name="name" required />
				<label>Email</label>
				<input type="email" name="email" required />
				<label>Subject</label>
				<input type="text" name="subject" />
				<label>Message</label>
				<textarea
					rows="6"
					placeholder="Type your message here"
					name="message"></textarea>
				<button className="btn">Submet</button>
			</form>
		</div>
	);
};

export default Form;
