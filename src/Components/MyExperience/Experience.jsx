import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="resume" className="my-experience">
      <div className="experience-header">
        <h1>My <span style={{color: "#EAB308"}}>Experiences</span></h1>
        <p>
          My background in Chemistry has equipped me with a strong analytical mindset  
          <br />
          
          and problem solving skills. My experience in research and documentation has  
          <br />also made me proficient in learning new programming languages.
        </p>
      </div>
      <div className='experience-grid'>
        <div className="ex-grid-one">
            <h3>January 2024 - present</h3>
            <h1><span style={{color: "#EAB308"}}>Front End Developer</span></h1>
            <h2>Freelance</h2>
            <p>Building and maintaining user interfaces (UI) of web applications using React.js <br/>
                </p>
        </div>
        <div className="ex-grid-two">
        <h3>January 2017 - present</h3>
            <h1><span style={{color: "#EAB308"}}>Web Designer</span></h1>
            <h2>Mindstream Media</h2>
            <p>Tracked and reported problems with site designs, providing remedial suggestions and solutions.<br/>
                Identified and eliminated website bugs to improve user experience.</p>
        </div>
        <div className="ex-grid-three">
        <h3>January 2014 - 2016</h3>
            <h1><span style={{color: "#EAB308"}}>Ecommerce Manager</span></h1>
            <h2>Liquordeal Nig Ltd</h2>
            <p>Responsible for managing the stores website,marketing,advertisements. 
                Liased with sales and marketing to develop solutions to generate more traffic to the website and also increase
                overall sales.
                </p>
        </div>

      </div>
      

      
    </div>
  );
};

export default Experience;
