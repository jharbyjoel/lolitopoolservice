import React from "react";
import './TypesOfServices.css'
import PoolChemicalServices from '../images/PoolChemicalService.webp';
import PoolFilterServices from '../images/PoolFilterService.webp';
import PoolWallBrushingServices from '../images/PoolWallBrushingService.webp';
import PoolAcidServices from '../images/PoolAcidWashService.webp';
import PoolWaterDrainingServices from '../images/PoolWaterDrainingService.webp';
import PoolFilterReplacementServices from '../images/PoolFilterReplacementSerivce.webp';



const TypesOfServices = () => {
  return (
    <section id="services-1356">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Services</span>
          <h2 className="cs-title">
            We’re Committed to Deliver Top High Quality Services
          </h2>
        </div>
        <ul className="cs-card-group">
          {[
            {
              title: "Chemical Adjustment",
              imgSrc:
                PoolChemicalServices,
            },
            {
              title: "Motor & Pump Replacement",
              imgSrc:
                PoolFilterServices,
            },
            {
              title: "Filter Replacement",
              imgSrc:
                PoolFilterReplacementServices,
            },
            {
                title: "Wall Brushing",
                imgSrc:
                  PoolWallBrushingServices,
              },
              {
                title: "Water Draining",
                imgSrc:
                  PoolWaterDrainingServices,
              },
                       {
              title: "Acid Wash",
              imgSrc:
                PoolAcidServices,
            },
          ].map((service, index) => (
            <li key={index} className="cs-item">
              <a href="/services" className="cs-link">
                <h3 className="cs-h3">
                  <span className="cs-span">{service.title.split(" ")[0]}</span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </h3>
              </a>
              <picture className="cs-background">
                <source
                  media="(max-width: 600px)"
                  srcSet={service.imgSrc}
                />
                <source
                  media="(min-width: 601px)"
                  srcSet={service.imgSrc}
                />
                <img
                  decoding="async"
                  src={service.imgSrc}
                  alt="construction"
                  width="305"
                  height="305"
                  aria-hidden="true"
                />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TypesOfServices;
