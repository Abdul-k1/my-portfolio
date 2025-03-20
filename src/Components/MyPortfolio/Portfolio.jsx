import React from "react";
import "./Portfolio.css";
import grid_1 from "../../assets/grid_1.svg";
import grid_2 from "../../assets/grid_2.svg";
import grid_3 from "../../assets/grid_3.svg";
import { Link } from "react-scroll";


const Portfolio = () => {

  const grid_OneClick = () => {
    window.open("odis-portfolio.netlify.app", "_blank", "noopener,noreferrer");
  };

  const grid_TwoClick = () => {
    window.open("https://odi-todo-app.netlify.app/", "_blank", "noopener,noreferrer");
  };

  const grid_ThreeClick = () => {
    window.open("https://counter-app10.netlify.app/counter", "_blank", "noopener,noreferrer");
  };


  return (
    <div id="portfolio" className="my-portfolio">
      <div className="header">
        <h1>
          My <span style={{ color: "#EAB308" }}>Portfolio</span>
        </h1>
        <p>
          I am a passionate Frontend Developer specializing in building user-friendly web applciations with React.js
          
          with a strong foundation in Javascript, HTML and CSS.
          
          Outlined below are some of my projects.
        </p>
      </div>
      <div className="portfolio-grid">
        
        
        <img src={grid_1} alt=" " style={{cursor: "pointer"}} 
        onClick={grid_OneClick} className="portfolio_images"/>
        
        
         
        <img src={grid_2} alt=""  className="portfolio_images" 
        onClick={grid_TwoClick} style={{cursor: "pointer"}}/>
        
        
        
        <img src={grid_3} alt="" className="portfolio_images" 
        onClick={grid_ThreeClick} style={{cursor: "pointer"}}/>
        
      </div>
    </div>
  );
};

export default Portfolio;
