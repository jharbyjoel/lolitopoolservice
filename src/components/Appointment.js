import React from "react";
import emailjs from "emailjs-com";
import './Appointment.css'
import AppointmentBanner from '../images/AppointmentBanner-min.webp'

const Appointment = () => {
  const handleEmailSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
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
  };

  return (
    <>
      {/* ============================================ */}
      {/*                   Banner                     */}
      {/* ============================================ */}
      <div id="banner-1403">
        <div className="cs-container">
          <span className="cs-int-title">Contact Us</span>
          <div className="cs-breadcrumbs">
            <a href="/home" className="cs-link">
              Home
            </a>
            <a href="/contact-us" className="cs-link cs-active">
              Contact
            </a>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          {/* Mobile Image */}
          <source
            media="(max-width: 600px)"
            srcSet={AppointmentBanner}
          />
          {/* Tablet and above Image */}
          <source
            media="(min-width: 601px)"
            srcSet={AppointmentBanner}
          />
          <img
            decoding="async"
            src={AppointmentBanner}
            alt="contact us"
            width="1280"
            height="568"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* ============================================ */}
      {/*                   Contact                    */}
      {/* ============================================ */}
      <section id="contact-1403">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Contact Us</span>
            <h2 className="cs-title">Get in Touch</h2>
            <p className="cs-text">
            With a decade of experience in the pool service industry, we specialize in working with all types of pools, delivering top-notch service that exceeds expectations. Our personalized approach ensures that our customers always come first because your satisfaction is our priority.
            </p>
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
                    +1 (786) 545-6534
                  </a>
                </div>
              </li>
              <li className="cs-li">
                <picture className="cs-icon-wrapper">
                  <img
                    aria-hidden="true"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mail-76.svg"
                    alt="email icon"
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
                  <a className="cs-link">
                  Pinecrest, Cutler Bay, Coral Way, Coral Gables, South Miami, Westchester, Kendall, Homestead
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* Form */}
          <form
            className="cs-form"
            id="cs-form-1403"
            name="Contact Form"
            method="post"
            onSubmit={handleEmailSubmit}
          >
            <h3 className="cs-h3">Make An Appointment</h3>
            <label className="cs-label">
              Name
              <input
                className="cs-input"
                required
                type="text"
                id="name-1403"
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
                id="email-1403"
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
                id="phone-1403"
                name="phone"
                placeholder="Phone"
              />
            </label>
            <label className="cs-label">
              Message
              <textarea
                className="cs-input cs-textarea"
                required
                name="message"
                id="message-1403"
                placeholder="Write message..."
              ></textarea>
            </label>
            <button className="cs-button-solid cs-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ============================================ */}
      {/*          Google Map Iframe Embed             */}
      {/* ============================================ */}
      <section id="map-1403">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358940.0737103384!2d-80.29949878573463!3d25.761679779119028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b67fc6dbd0db%3A0x2a7f4f987cbf91c7!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1717096613140!5m2!1sen!2sus"
            width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* ============================================ */}
      {/*                   Reviews                    */}
      {/* ============================================ */}
      <section id="reviews-1403">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Testimonials</span>
            <h2 className="cs-title">Happy Client’s Feedback About Our Service</h2>
          </div>
          <ul className="cs-card-group">
            <li className="cs-item">
              {/* Blue Quote */}
              <img
                className="cs-quote"
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pink-quotes.svg"
                decoding="async"
                alt="quote icon"
                width="120"
                height="99"
              />
              <p className="cs-item-text">
                Eduardo has been servicing my pool for over five years and he is fair, transparent and consistant. I recommend his buismess to all my friends and family.
              </p>
              <div className="cs-flex-group">
                <picture className="cs-picture">
                  <img
                    className="cs-profile"
                    src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.jpg"
                    decoding="async"
                    alt="profile"
                    width="50"
                    height="50"
                    aria-hidden="true"
                  />
                </picture>
                <span className="cs-name">
                  Britney Allison
                  <span className="cs-job">Customer</span>
                </span>
              </div>
            </li>
            <li className="cs-item">
              {/* Blue Quote */}
              <img
                className="cs-quote"
                aria-hidden="true"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/pink-quotes.svg"
                decoding="async"
                alt="quote icon"
                width="120"
                height="99"
              />
              <p className="cs-item-text">
                If you want someone who is going to do a good job every single time he is out there, Eduardo is your guy. 
              </p>
              <div className="cs-flex-group">
                <picture className="cs-picture">
                  <img
                    className="cs-profile"
                    src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile3.png"
                    decoding="async"
                    alt="profile"
                    width="50"
                    height="50"
                    aria-hidden="true"
                  />
                </picture>
                <span className="cs-name">
                  Pedro Valdez
                  <span className="cs-job">Customer</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Appointment;
