import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import confirmOdi_logo from "../../assets/confirmOdi_logo.png";
import mobile_menu_open from "../../assets/mobile_menu_open.svg";
import mobile_menu_close from "../../assets/mobile_menu_close.svg";

import { GoCopilot } from "react-icons/go";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu =() => {
    menuRef.current.style.right = "0";
  }

  const closeMenu =() => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div id="home" className="navbar">
      <img src={confirmOdi_logo} alt="" className="page-logo" />

      <img src={mobile_menu_open} alt="" className="mobile_menu_open" onClick={openMenu}/>

      <ul ref = {menuRef} className="nav-menu">
        <img src={mobile_menu_close} alt="" className="mobile_menu_close" onClick={closeMenu}/>
        <li>
          <Link to="hero" smooth={true} duration="500">
            <p onClick={() => setMenu("home")}>Home</p>
          </Link>
          {menu === "home" ? (
            <div
              style={{
                backgroundColor: "#EAB308",
                width: "57px",
                height: "3px",
              }}
            ></div>
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to="about" smooth={true} duration="500">
            <p onClick={() => setMenu("about")}>About</p>
          </Link>
          {menu === "about" ? (
            <div
              style={{
                backgroundColor: "#EAB308",
                width: "57px",
                height: "3px",
              }}
            ></div>
          ) : (
            <></>
          )}
        </li>
        
        <li>
          <Link to="portfolio" smooth={true} duration="500">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </Link>
          {menu === "portfolio" ? (
            <div
              style={{
                backgroundColor: "#EAB308",
                width: "82px",
                height: "3px",
              }}
            ></div>
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to="resume" smooth={true} duration="500">
            <p onClick={() => setMenu("resume")}>Resume</p>
          </Link>
          {menu === "resume" ? (
            <div
              style={{
                backgroundColor: "#EAB308",
                width: "79px",
                height: "3px",
              }}
            ></div>
          ) : (
            <></>
          )}
        </li>
        <li>
          <Link to="contact" smooth={true} duration="500">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? (
            <div
              style={{
                backgroundColor: "#EAB308",
                width: "78px",
                height: "3px",
              }}
            ></div>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
