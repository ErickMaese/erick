import "./FooterStyles.css";
import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="phone">
						<FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
						1.310.748.6787
					</div>
					<div className="email">
						<FaEnvelope
							size={20}
							style={{ color: "#fff", marginRight: "2rem" }}
						/>
						maese99@gmail.com
					</div>
				</div>
				<div className="right">
					<h4>Connect with me</h4>
					<p>I enjoy discussing new projects and design challenges.</p>
					<div className="social">
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erickmaese/">
							<FaLinkedin
								size={20}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</a>
						<a target="_blank" rel="noreferrer" href="https://github.com/ErickMaese">
							<FaGithub
								size={20}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
