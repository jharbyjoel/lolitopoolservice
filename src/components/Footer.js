import emailjs from "emailjs-com";
import React from 'react';
import './Footer.css';

const ContactSectionFooter = () => {

  const handleEmailSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_xuzwmzb", 
      "template_9ju698c", 
      event.target,
      "FJVzrb4_3M5vuIRd5" 

    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending message.", error);
      alert("Failed to send message. Please try again.");
    });

    event.target.reset();
  }
  return (
    <section id="contact-1392">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Contact</span>
          <h2 className="cs-title">Get in Touch</h2>
          <p className="cs-text">
          Contact me today for a fair and transparent quote for your pool. I’m committed to providing you with the best value, without any hidden fees or surprises          </p>
          <ul className="cs-ul">
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-76.svg"
                  alt="phone icon"
                  className="cs-icon"
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Phone</span>
                <a href="tel:786-545-6534" className="cs-link">
                  +786 545 6534
                </a>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                  alt="address icon"
                  className="cs-icon"
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Email</span>
                <a href="mailto:eduardo.diaz08@yahoo.es" className="cs-link">
                  eduardo.diaz08@yahoo.es
                </a>
              </div>
            </li>
            <li className="cs-li">
              <picture className="cs-icon-wrapper">
                <img
                  aria-hidden="true"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pin-76.svg"
                  alt="address icon"
                  className="cs-icon"
                  width="40"
                  height="40"
                  decoding="async"
                />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-header">Servicing</span>
                <p  className="cs-link">
                Pinecrest, Cutler Bay, Coral Way, Coral Gables, South Miami, Westchester, Kendall, Homestead
                </p>
              </div>
            </li>
          </ul>
        </div>
        <form className="cs-form" onSubmit={handleEmailSubmit}>
          <h3 className="cs-h3">Make Appointment</h3>
          <label className="cs-label">
            Name
            <input
              className="cs-input"
              required
              type="text"
              id="name-1392"
              name="name"
              placeholder="Name"
            />
          </label>
          <label className="cs-label cs-email">
            Email
            <input
              className="cs-input"
              required
              type="email"
              id="email-1392"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className="cs-label cs-phone">
            Phone
            <input
              className="cs-input"
              required
              type="number"
              id="phone-1392"
              name="phone"
              placeholder="Phone"
            />
          </label>
          <label className="cs-label">
            Message
            <textarea
              className="cs-input cs-textarea"
              required
              name="Message"
              id="message-1392"
              placeholder="Write message..."
            ></textarea>
          </label>
          <button className="cs-button-solid cs-submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer-1392">
      <div className="cs-container">
        <div className="cs-top">
          <a aria-label="go back to home" className="cs-logo" href="">
            <img
              className="cs-logo-img"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Logos/agency-logo.svg"
              alt="logo"
              width="209"
              height="40"
            />
          </a>
          <ul className="cs-ul">
            <li className="cs-li">
              <a href="" className="cs-link">Home</a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">About</a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">Services</a>
            </li>
            <li className="cs-li">
              <a href="" className="cs-link">Contact</a>
            </li>
          </ul>
        </div>
        <div className="cs-bottom">
          <ul className="cs-social">
            <li className="cs-social-li">
              <a href="" className="cs-social-link" aria-label="facebook" target="_blank" rel="noopener">
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/face-white1.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a href="" className="cs-social-link" aria-label="twitter" target="_blank" rel="noopener">
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a href="" className="cs-social-link" aria-label="instagram" target="_blank" rel="noopener">
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="cs-social-li">
              <a href="" className="cs-social-link" aria-label="youtube" target="_blank" rel="noopener">
                <img
                  className="cs-social-icon cs-default"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube.svg"
                  alt="icon"
                  loading="lazy"
                  decoding="async"
                  width="12"
                  height="12"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
          <span className="cs-copyright">
            © Copyright 2024 - <a href="" className="cs-copyright-link">Grey Maverick Web Designs</a>
          </span>
          <div className="cs-flex">

          </div>
        </div>
      </div>
    </footer>
  );
}

export { ContactSectionFooter, Footer };

