import React , {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import "./contactform.css";

function ContactForm() {
  useEffect(()=>{
    Aos.init({ duration: 1000});
  },[])
  return (
    <div data-aos = "flip-left" className="contact">
      <form
        className="contact-form"
        action="https://formspree.io/f/xjvdlgzp"
        method="POST"
      >
        
        <input
          className="contact-input"
          id="name"
          type="text"
          name="Name"
          placeholder="Your Name"
          autoComplete="off"
          required
        />

        <input
          className="contact-input"
          id="email"
          type="email"
          name="Email"
          placeholder="Your Email"
          autoComplete="off"
          required
        />

        <textarea
          className="contact-message"
          id="message"
          name="Message"
          placeholder="Your Message"
          autoComplete="off"
          cols="30"
          rows="5"
          required
        ></textarea>

        <div className="btns">
          <button className="contact-btn send-btn" type="submit">
            Send Message
          </button>
          <button className="contact-btn clear-btn">Clear</button>
        </div>
      </form>
      <a className="formm-gmail-btn" href="mailto:Abhaycbr07@gmail.com">
        Contact through Gmail
      </a>
    </div>
  );
}

export default ContactForm;
