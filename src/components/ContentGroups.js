import React from "react";
import './ContentGroups.css';

const ContentGroups = () => {
  return (
    <div id="cs-content">
      <div className="cs-content">
        <div className="cs-flex-wrapper">
          <div className="cs-flex">
            <span className="cs-topper">Our Mission</span>
            <h2 className="cs-title">Your Pool, Always in Optimal Shape</h2>
          </div>
          <a href="/about-us" className="cs-button-solid">
            Learn More About Us
          </a>
        </div>
        <div className="cs-wrapper">
          <p className="cs-text">
            As a proud business owner, I ensure that your pool stays in the best possible condition all year round. Whether it's routine maintenance, cleaning, or repair, I am here to keep your pool sparkling and ready for you to enjoy. My expertise ensures that your pool operates efficiently, safely, and looks stunning every time you dive in.
          </p>
          <ul className="cs-ul">
            {[
              "Your pool will always be clean and clear",
              "I offer regular, customized maintenance plans",
              "I ensure all pool equipment is functioning properly",
              "I handle repairs quickly and efficiently",
              "You’ll have peace of mind knowing your pool is in great hands",
            ].map((text, index) => (
              <li className="cs-li" key={index}>
                <img
                  className="cs-check-icon"
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-check.svg"
                  alt="checkmark"
                  width="20"
                  height="20"
                />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentGroups;
