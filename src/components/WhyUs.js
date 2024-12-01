import React from "react";
import './WhyUs.css'

const WhyUs = () => {
    return (
        <section id="why-choose-441">
          <div className="cs-container">
            <span className="cs-topper">Best-In-Class</span>
            <h2 className="cs-title">Why Choose Me?</h2>
            <p className="cs-text">
            This is my personal business, and I take great pride in my work. I am accountable for the services I deliver, ensuring that they reflect my values and dedication. Unlike other companies that rely on different workers for their routes, my clients consistently receive my personal attention.
            </p>
            <ul className="cs-card-group">
              <li className="cs-item">
                <a href="#" className="cs-link">
                  <picture className="cs-picture" aria-hidden="true">
                    <img
                      className="cs-icon"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon1.svg"
                      loading="lazy"
                      decoding="async"
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </picture>
                  <span className="cs-number">80+</span>
                  <p className="cs-item-p">Happy families.</p>
                </a>
              </li>
              <li className="cs-item">
                <a href="#" className="cs-link">
                  <picture className="cs-picture" aria-hidden="true">
                    <img
                      className="cs-icon"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon2.svg"
                      loading="lazy"
                      decoding="async"
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </picture>
                  <span className="cs-number">80+</span>
                  <p className="cs-item-p">Satisfied Customers.</p>
                </a>
              </li>
              <li className="cs-item">
                <a href="#" className="cs-link">
                  <picture className="cs-picture" aria-hidden="true">
                    <img
                      className="cs-icon"
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Why-Choose/icon3.svg"
                      loading="lazy"
                      decoding="async"
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </picture>
                  <span className="cs-number">1000+</span>
                  <p className="cs-item-p">Pools Cleaned.</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
      );
}

export default WhyUs;