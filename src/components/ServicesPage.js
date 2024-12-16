import React from 'react';
import heroimage from '../images/heroimage.webp';
import PoolService from '../images/servicespicture-min.webp';
import './ServicesPage.css';
const ServicesPage = () => {
  return (
    <div>
      {/* ============================================ */}
      {/*                 Banner                     */}
      {/* ============================================ */}
      <div id="banner-1401">
        <div className="cs-container">
          <span className="cs-int-title">Services</span>
          <div className="cs-breadcrumbs">
            <a href="/home" className="cs-link">Home</a>
            <a href="/services" className="cs-link cs-active">Services</a>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          {/* Mobile Image */}
          <source
            media="(max-width: 600px)"
            srcSet={heroimage}
          />
          {/* Tablet and above Image */}
          <source
            media="(min-width: 601px)"
            srcSet={heroimage}
          />
          <img
            decoding="async"
            src={heroimage}
            alt="people laughing"
            width="1280"
            height="568"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* ============================================ */}
      {/*                 Content Page                 */}
      {/* ============================================ */}
      <section id="content-page-1401">
        <div className="cs-container">
          <div className="cs-image-group">
            <div className="cs-flex">
              <picture className="cs-background">
                {/* Mobile Image */}
                <source
                  media="(max-width: 600px)"
                  srcSet={PoolService}
                />
                {/* Tablet and above Image */}
                <source
                  media="(min-width: 601px)"
                  srcSet={PoolService}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={PoolService}
                  alt="people"
                  width="542"
                  height="728"
                />
              </picture>
              <div className="cs-box">
                <img
                  className="cs-box-icon"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/gear-white.svg"
                  alt="icon"
                  width="60"
                  height="60"
                />
                <span className="cs-desc">
                  Over 10 Years of Pool Service Experience
                </span>
              </div>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item">
                <h3 className="cs-h3">
                  <img
                    className="cs-h3-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/trophy.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  Quality Pool Services
                </h3>
                <p className="cs-item-text">
                  We provide reliable, personalized pool services to ensure your pool stays clean and well-maintained.
                </p>
              </li>
              <li className="cs-item">
                <h3 className="cs-h3">
                  <img
                    className="cs-h3-icon"
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/circle-check.svg"
                    alt="icon"
                    width="32"
                    height="32"
                  />
                  Customized Care
                </h3>
                <p className="cs-item-text">
                  As a small business, we focus on providing individualized attention to each of our clients, ensuring their specific needs are met.
                </p>
              </li>
            </ul>
          </div>
          <div className="cs-content">
            <h1 className="cs-title">
              Personalized Pool Services Tailored to Your <span className="cs-color">Needs</span>
            </h1>
            <p>
              With over 10 years of experience in the pool service industry, we provide expert care and maintenance for all types of pools. We believe in treating every client with care and ensuring that their pool is in top condition.
            </p>
            <h3>Pool Cleaning</h3>
            <p>
              We offer thorough pool cleaning services, including debris removal, vacuuming, and checking the filtration system. Your pool will be sparkling clean and ready for use after each service.
            </p>
            <h3>Pool Maintenance</h3>
            <p>
              Regular maintenance is key to keeping your pool running smoothly. We provide equipment inspections, chemical testing, and balancing to ensure the health of your pool.
            </p>
            <h3>Repairs and Upgrades</h3>
            <p>
              Whether it's fixing a pump, replacing tiles, or upgrading your pool's system, We can handle all necessary repairs and improvements with careful attention to detail.
            </p>
            <h4>Why Choose Our Services?</h4>
            <ul>
              <li>Over 10 years of experience in the pool service industry.</li>
              <li>Personalized care for every customer, with no middlemen.</li>
              <li>Commitment to excellence and customer satisfaction.</li>
            </ul>
            <p>
              Let us take the hassle out of pool care so you can enjoy a stress-free swimming experience. Contact us today to schedule your service!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
