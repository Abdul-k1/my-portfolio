import React from "react";
import "./Service.css";
import icon_two from '../../assets/icon_two.png';
import icon_graphic from '../../assets/icon_graphic.png';
import icon_web from '../../assets/icon_web.png';

const Service = () => {
  return (
    <div id="service" className="my-service">
      <div className="service-headline">
        <h1>My <span style={{color: "#EAB308"}}>Service</span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assum
          <br />
          enda dolores in quia,minima cum aspernatur hic illum consequatur
          <br />
          dicta repellat natus? Provident, fugiat!
        </p>
      </div>
      <div className="service-grid">
        <div className="grid-one">
          <img src={icon_two} alt=""></img>
          <h2>Digital <br/>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            <br />
            at iusto modi alias maiores ratione laboriosam
          </p>
        </div>
        <div className="grid-two">
          <img src={icon_web} alt=""></img>
          <h2>Web <br/>Developments</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            <br />
            at iusto modi alias maiores ratione laboriosam
          </p>
        </div>
        <div className="grid-three">
          <img src={icon_graphic} alt=""></img>
          <h2>Creative <br/>Graphic Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            <br />
            at iusto modi alias maiores ratione laboriosam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
