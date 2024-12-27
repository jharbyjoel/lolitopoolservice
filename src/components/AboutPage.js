import React from 'react';
import AboutUsPicture from '../images/aboutus-min.webp';
import './AboutPage.css';
import AboutBannerImage from '../images/AppointmentInteriorPage.webp'
const AboutPage = () => {
  return (
    <>
      {/* ============================================ */}
      {/*                   Banner                     */}
      {/* ============================================ */}
      <div id="banner-1401">
        <div className="cs-container">
          <span className="cs-int-title">About Us</span>
          <div className="cs-breadcrumbs">
            <a href="/home" className="cs-link">Home</a>
            <a href="/about" className="cs-link cs-active">About</a>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          {/* Mobile Image */}
          <source
            media="(max-width: 600px)"
            srcSet={AboutBannerImage}
          />
          {/* Tablet and above Image */}
          <source
            media="(min-width: 601px)"
            srcSet={AboutBannerImage}
          />
          <img
            decoding="async"
            src={AboutBannerImage}
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
      <section id="content-page-713">
        <div className="cs-container">
          <div className="cs-content">
            <h1 className="cs-title">
              A Personalized Approach To Your <span className="cs-color">Well-Being</span>
            </h1>
            <h2>About Us</h2>
            <p>
              With over 10 years of experience in the pool service industry, we specialize in providing exceptional service for all types of pools. Our team is dedicated to ensuring your pool is well-maintained and always ready for use. 
            </p>
            <h3>Why Choose Us?</h3>
            <p>
              We take pride in offering personalized care because, for us, our customers always come first. We understand that every pool is unique, and we tailor our services to meet your specific needs. Whether you're looking for regular maintenance or a one-time repair, we ensure that you receive the best service possible.
            </p>
            <h4>Our Commitment to You</h4>
            <p>
              With our extensive experience and a customer-first approach, we aim to exceed your expectations with every visit. Our expert team is dedicated to providing reliable, high-quality service that keeps your pool in perfect condition all year round.
            </p>
            <h3>Our Services</h3>
            <ul>
              <li>Comprehensive Pool Maintenance</li>
              <li>Repairs and Equipment Installation</li>
              <li>Water Chemistry and Filtration System Cleaning</li>
              <li>Personalized Service Plans</li>
            </ul>
            <h4>Let's Work Together</h4>
            <p>
              Ready to experience the best in pool service? Contact us today to schedule your first appointment. We look forward to helping you maintain a pool that’s always inviting, refreshing, and ready to enjoy!
            </p>
          </div>
          <div className="cs-image-group">
            <picture className="cs-picture">
              {/* Mobile Image */}
              <source media="(max-width: 600px)" srcSet={AboutUsPicture} />
              {/* Tablet and above Image */}
              <source media="(min-width: 601px)" srcSet={AboutUsPicture} />
              <img
                loading="lazy"
                decoding="async"
                src={AboutUsPicture}
                alt="person"
                width="570"
                height="680"
                aria-hidden="true"
              />
            </picture>

            {/* Spidey Sense Graphic */}
            <img
              className="cs-sense"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fspider-sense.svg"
              alt="spidey sense graphic"
              width="80"
              height="89"
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Waves Graphic */}
        <picture className="cs-background">
          <img
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Flarge-waves.svg"
            alt="waves"
            decoding="async"
            aria-hidden="true"
            width="625"
            height="952"
          />
        </picture>
      </section>
    </>
  );
};

export default AboutPage;
