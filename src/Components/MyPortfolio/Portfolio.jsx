import React from "react";
import "./Portfolio.css";
import grid_1 from "../../assets/grid_1.jpg";
import grid_2 from "../../assets/grid_2.svg";
import grid_3 from "../../assets/grid_3.svg";


const Portfolio = () => {
  return (
    <div id="portfolio" className="my-portfolio">
      <div className="header">
        <h1>
          My <span style={{ color: "#EAB308" }}>Portfolio</span>
        </h1>
        <p>
          I am passionate Frontend Developer specializing <br />
          in building user-friendly web applciations with React.js.
          <br />
          With a strong foundation in Javascript, HTML and CSS,
          <br />
          Outlined below are some of my projects.
        </p>
      </div>
      <div className="portfolio-grid">
        <img src={grid_1} alt=""  />
        <a href="https://odi-todo-app.netlify.app/" target="_blank"> 
        <img src={grid_2} alt=""  />
        </a>
        
        <a href="https://counter-app10.netlify.app/counter" target="_blank">
        <img src={grid_3} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
