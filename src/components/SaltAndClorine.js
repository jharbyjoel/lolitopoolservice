import React from 'react';
import './SaltAndClorine.css';

const SaltAndClorine = () => {
  return (
    <section id="services-1302">
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-flex-group">
            <span className="cs-topper">Pool Types</span>
            <h2 className="cs-title">Expert Pool Cleaning for Both Chlorine & Saltwater Pools</h2>
          </div>
          <p className="cs-text">
            Whether you have a chlorine pool or a saltwater pool, we provide top-tier cleaning services to keep your pool sparkling clean and in optimal condition. Our experienced team specializes in both systems, ensuring your pool remains safe, clear, and inviting all year round. 
          </p>
        </div>
        <ul className="cs-card-group">
          <li className="cs-item">
            <a href="" className="cs-link">
              <img
                className="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/brain.svg"
                loading="lazy"
                decoding="async"
                alt="icon"
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h3 className="cs-h3">Chlorine Pool Cleaning</h3>
              <p className="cs-item-text">
                Our chlorine pool cleaning service includes testing and balancing your pool's chemicals, scrubbing the tiles, and ensuring your pool's filtration system is functioning properly. We keep your chlorine pool safe and pristine for swimming.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <img
                className="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/users.svg"
                loading="lazy"
                decoding="async"
                alt="icon"
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h3 className="cs-h3">Saltwater Pool Cleaning</h3>
              <p className="cs-item-text">
                Our saltwater pool cleaning service focuses on maintaining the ideal salinity levels, cleaning the salt cell, and ensuring that the system is operating efficiently. Let us keep your saltwater pool as inviting as the day you installed it.
              </p>
            </a>
          </li>
          <li className="cs-item">
            <a href="" className="cs-link">
              <img
                className="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/Layer.svg"
                loading="lazy"
                decoding="async"
                alt="icon"
                width="40"
                height="40"
                aria-hidden="true"
              />
              <h3 className="cs-h3">Custom Pool Maintenance</h3>
              <p className="cs-item-text">
                We offer tailored pool maintenance services that address the specific needs of both chlorine and saltwater pools, including regular cleaning, chemical adjustments, and equipment maintenance to keep your pool in top condition year-round.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SaltAndClorine;
