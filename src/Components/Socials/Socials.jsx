import React from "react";

import "./Socials.css";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="my-socials">
      <h1>My Socials</h1>
      <p>
        These are my social media handles, you can check me out <br />
        by clicking any of the links below.
      </p>
      <div className='social-icons'>
        <a href="https://www.instagram.com/confirmodi/" target="_blank">
        <FaInstagram size="24px" color="#1F2937" className="my-icons"/>
        </a>
        <a href="https://web.facebook.com/odi.abdulkareem" target="_blank">
        <MdFacebook size="24px" color="1F2937" className="my-icons"/>
        </a>
        <a href="https://x.com/ConfirmOdi" target="_blank">
        <FaXTwitter size="24px" color="1F2937" className="my-icons"/>
        </a>
        
        <a href="https://www.linkedin.com/in/odi-abdulkareem-728857a6/" target="_blank">
        <FaLinkedinIn size="24px" color="1F2937" className="my-icons"/>
        </a>
        
        

      </div>
    </div>
  );
};

export default Socials;
