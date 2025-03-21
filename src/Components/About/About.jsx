import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import hero_image_two from "../../assets/hero_image_two.svg";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about_div">
        <img src={hero_image_two}  className="about_image" alt="" />
      </div>

      <div className="about-right">
        <h1>
          About <span style={{ color: "#EAB308" }}>Me</span>
        </h1>
        <p>
          I'm a Chemistry BSc graduate transitioning into Software Engineering,
          with a strong interest in frontend development and Web 3.
          I'm enhancing my skills in Javascript, React.js, Next.js and
          blockchain.
          <br />
          <br />I am Passionate about problem-solving,I enjoy building scalable
          applications and collaborating on innovative projects. I'm currently open to
          learning opportunities,internships,and mentorship in the tech industry.
        </p>
        <Link to="contact" smooth={true} duration="500">
          <div className="about-contact" onClick={() => setMenu("contact")}>
            Contact Me
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
