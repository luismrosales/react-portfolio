import React from "react";
import "./style.css";
function Contact() {
  return (
    <div>
      <h1 className="c1">Contact me</h1>
      <div className="border"></div>
      <p className="in">
        Get in touch with me, send me an email, a text or feel free to give me a
        call.
      </p>

      <div className="contact">
        <a href="tel:+3175159082">
          <i className="bi bi-phone-fill"></i>
        </a>

        <a href="mailto:luismrosales2@gmail.com">
          <i class="bi bi-envelope-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
