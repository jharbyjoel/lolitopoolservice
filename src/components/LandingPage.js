import React from "react";
import './LandingPage.css';
import herogif from '../images/herogif.gif';
import heroimagemobile from '../images/heroimage-m.webp';
import poolservice1 from '../images/poolservice1.webp';
import poolservice2 from '../images/poolservice2.webp';
import poolservice3 from '../images/poolservice3.webp';
import poolservice4 from '../images/poolservice4.webp';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="hero-1957">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Premium Care</span>
            <h1 className="cs-title"> A Pool Service That You Can Trust</h1>
            <p className="cs-text">
              The Best Choice For Pool Care Year Round
            </p>
            <a href="" className="cs-button-solid">
              Book Online
            </a>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          <source
            media="(max-width: 800px)"
            srcSet={herogif}
          />
          <source
            media="(min-width: 601px)"
            srcSet={herogif}
          />
          <img
            decoding="async"
            src={herogif}
            alt="healthcare professionals"
            width="1920"
            height="746"
            aria-hidden="true"
          />
        </picture>
      </section>

      {/* Services Section */}
      <section id="services-1957">
        <div className="cs-container">
          <ul className="cs-card-group">
            {/* Service Items */}
            {[
              {
                title: "Weekly Pool Maintenance",
                description: "Service Every Week",
                image: poolservice1,
              },
              {
                title: "Equipment Install",
                description: "Built for Reliability and Peak Performance",
                image: poolservice3,
              },
              {
                title: "Add-Ons",
                description: " Combining Safety, Style, and Functionality",
                image: poolservice2,
              },
              {
                title: "Acid and Pressure Wash",
                description: "Revitalize, Renew, and Restore Its Sparkling Charm",
                image: poolservice4,
              },
            ].map((service, index) => (
              <li className="cs-item" key={index}>
                <a href="" className="cs-link">
                  <picture className="cs-icon-wrapper">
                    <img
                      className="cs-icon"
                      loading="lazy"
                      decoding="async"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/black-up-right-arrow.svg"
                      alt="icon"
                      width="32"
                      height="32"
                    />
                  </picture>
                  <div className="cs-flex">
                    <span className="cs-topper">{service.title}</span>
                    <h3 className="cs-h3">{service.description}</h3>
                  </div>
                </a>
                <picture className="cs-item-background">
                  <source
                    media="(max-width: 600px)"
                    srcSet={service.image}
                  />
                  <source
                    media="(min-width: 601px)"
                    srcSet={service.image}
                  />
                  <img
                    decoding="async"
                    src={service.image}
                    alt="healthcare patient"
                    width="455"
                    height="337"
                    aria-hidden="true"
                  />
                </picture>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
