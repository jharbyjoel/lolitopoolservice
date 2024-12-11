import emailjs from "emailjs-com";
import React from "react";
import './ContactForm.css';

const ContactSection = () => {
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
      <section id="contact">
        <div className="cs-container">
          <div className="cs-form-group">
            <div className="cs-content">
              <span className="cs-topper">Get in Touch</span>
              <h2 className="cs-title">Book An Appointment</h2>
            </div>
            {/* Form */}
            <form className="cs-form" id="cs-form" onSubmit={handleEmailSubmit}>
              <label className="cs-label">
                Name *
                <input
                  className="cs-input"
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </label>
              <label className="cs-label cs-email">
                Email *
                <input
                  className="cs-input"
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </label>
              <label className="cs-label cs-phone">
                Phone *
                <input
                  className="cs-input"
                  required
                  type="phone"
                  id="phone"
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
                  id="message"
                  placeholder="Write message..."
                ></textarea>
              </label>
              <button className="cs-button-solid cs-submit" type="submit">
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="cs-info-group">
            <div className="cs-info">
              <span className="cs-topper">Servicing</span>
              <span className="cs-detail">
              Pinecrest, Cutler Bay, Coral Way, Coral Gables, South Miami, Westchester, Kendall, Homestead
              </span>
            </div>
            <div className="cs-info">
              <span className="cs-topper">Working Hours</span>
              <span className="cs-detail">Tuesday - Friday: 7:00 AM - 5:00 PM</span>
              <span className="cs-detail">Saturday: Closed</span>
              <span className="cs-detail">Sunday: Closed</span>
              <span className="cs-detail">Monday: Closed</span>
            </div>
            <div className="cs-info">
              <span className="cs-topper">Contact</span>
              <span className="cs-detail">M: (786)-545-6534</span>
              <span className="cs-detail">E: eduardo.diaz08@yahoo.es</span>
            </div>
          </div>
        </div>
  
        <div className="cs-picture-group">
          {/* Replace with your iframe for your Google Business profile */}
          <iframe
            className="cs-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358940.0737103384!2d-80.29949878573463!3d25.761679779119028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b67fc6dbd0db%3A0x2a7f4f987cbf91c7!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1717096613140!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
  
          {/* Graphics */}
          {["top", "left", "bottom"].map((position) => (
            <img
              key={position}
              className={`cs-graphic cs-${position} cs-light`}
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-light.svg"
              alt="graphic"
              height="161"
              width="1920"
              loading="lazy"
              decoding="async"
            />
          ))}
          {["top", "left", "bottom"].map((position) => (
            <img
              key={`${position}-dark`}
              className={`cs-graphic cs-${position} cs-dark`}
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-hero-shape-top-dark.svg"
              alt="graphic"
              height="161"
              width="1920"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>
   )

  }

  export default ContactSection;
  