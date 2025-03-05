import React from "react";
import { Link } from "react-scroll";

import hero_image_one from "../../assets/hero_image_one.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero-left">
        <h3>Hello, Welcome</h3>
        <h1>I m Odi Abdulkareem</h1>
        <p>Chemistry BSc graduate transitioning into Software Engineering. <br />
        Passionate about frontend development and scalable solutions. <br />
        Proficient in Html,CSS, Javascript, React.js, Bootstrap, Tailwind & Gits, <br />with a strong problem solving mindset.
           </p>
        <Link to="contact" smooth={true} duration="500">
          <div className="hero-contact" onClick={() => setMenu("contact")}>
            Say Hello
          </div>
        </Link>
      </div>
      <div className="hero-image">
        <img src={hero_image_one} className="my-image" alt="" />
      </div>
    </div>
  );
};

export default Hero;
