import emailjs from 'emailjs-com';
import React from "react";
import headshot from '../images/eduardoheadshot-min.webp';
import './Appointment.css';
import Banner from "./InteriorBanner";
const Appointment = () => {

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
    <section id="contact-1699">
         <Banner />
      <div className="cs-container">
        {/* About Us Section */}
        <div className="cs-content">
          <span className="cs-topper">About Us</span>
          <h2 className="cs-title">A Proud Business Owner</h2>
          <p className="cs-text">
          With a decade of experience in the pool service industry, we specialize in working with all types of pools, delivering top-notch service that exceeds expectations. Our personalized approach ensures that our customers always come first because your satisfaction is our priority.
          </p>
          <div className="cs-author">
            <picture className="cs-profile">
              <img
                src={headshot}
                alt="profile"
                width="35"
                height="40"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </picture>
            <div className="cs-flex-group">
              <img
                className="cs-signature"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-signature.png"
                alt="founder's signature"
                height="52"
                width="52"
                loading="lazy"
                decoding="async"
              />
              <span className="cs-job">Eduardo Diaz</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="cs-form" id="cs-form-1699" name="Contact Form" onSubmit={handleEmailSubmit}>
          <div className="cs-content">
            <span className="cs-topper">Contact Us</span>
            <h2 className="cs-title">Get The Service You Deserve</h2>
          </div>
          <label className="cs-label">
            Name *
            <input
              className="cs-input"
              required
              type="text"
              id="name-1699"
              name="name"
              placeholder="Name"
            />
          </label>
          <label className="cs-label">
            Email *
            <input
              className="cs-input"
              required
              type="email"
              id="email-1699"
              name="email"
              placeholder="Email"
            />
          </label>
          <label className="cs-label">
            Phone
            <input
              className="cs-input"
              type="number"
              id="phone-1699"
              name="phone"
              placeholder="Phone"
            />
          </label>
          <label className="cs-label">
            Message *
            <textarea
              className="cs-input cs-textarea"
              required
              name="message"
              id="message-1699"
              placeholder="Message"
            ></textarea>
          </label>
          <button className="cs-button-solid cs-submit" type="submit">
            Send Message
          </button>
          <picture className="cs-background">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png"
              alt="wind turbine"
              width="650"
              height="613"
            />
          </picture>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
