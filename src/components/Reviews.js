import React from "react";
import "./Reviews.css";
import NiurkaHeadshot from '../images/niurkaheadshot.webp'

const Reviews = () => {
  return (
    <section id="reviews-545">
      <div className="cs-container">
        <div className="cs-review-group">
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet={NiurkaHeadshot}
            />
            <source
              media="(min-width: 601px)"
              srcSet={NiurkaHeadshot}
            />
            <img
              loading="lazy"
              decoding="async"
              src={NiurkaHeadshot}
              alt="person smiling"
              width="256"
              height="256"
            />
          </picture>
          <div className="cs-content">
            <p className="cs-review">
            Eduardo has been cleaning my pool for over five years, through COVID, hurricanes, shutdowns—you name it. He always shows up
            </p>
            <span className="cs-name">Niurka Gonzalez</span>
            <span className="cs-desc">Happy Customer</span>
          </div>
          {/* SVG Greek Pattern */}
          <img
            className="cs-pattern"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/greek-pattern.svg"
            alt="pattern"
            width="256"
            height="256"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
