import React from "react";
import Geolocation from "./GoogleLocation";
import ContactForm from "./contactform";
import "./contactMiddle.css";
function ContactMiddle() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Geolocation />
      </div>
      <div className="grid-item">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMiddle;
