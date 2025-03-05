import React from "react";
import { useRef } from "react";

import "./Contact.css";



const Contact = () => {

  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.value.reset();
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    


    formData.append("access_key", "2eb23d56-2b87-4169-92a5-736b38ceaaff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form has been submitted");
      inputRef.current.reset();

    }




  }


  return (
    <div id="contact" className="my-contact">
      <div className="contact-header">
        <h1>
          Contact <span style={{ color: "#EAB308" }}>Me</span>
        </h1>
        <p>
          Reach out for collaborations or inquiries let's discuss your next project. <br />
          
        </p>
      </div>
      <div className="address-book">
        <div className="contact-left">
          <p>
            <span style={{ color: "#EAB308" }}>Address_</span> Blk 631 FLAT 5
            Abesan Estate Ipaja
          </p>
          <p>Lagos, Nigeria</p>
          <p>
            <span style={{ color: "#EAB308" }}>Phone_</span> +2348033661724
          </p>
          <p>
            <span style={{ color: "#EAB308" }}>E mail_</span>{" "}
            odiabdulkareem@gmail.com
          </p>
          <p>
            <span style={{ color: "#EAB308" }}>Website_</span>{" "}
            www.confirmodi.com
          </p>
        </div>

        <form onSubmit={onSubmit} className="contact-right" ref={inputRef}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="my-name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            id="my-email"
            required
          />

          <textarea
            placeholder="Message"
            name="message"
            id="my-message"
            rows="8"
            required
          />
          <button type="submit" className="submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
