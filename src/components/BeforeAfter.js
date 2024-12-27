import React from "react";
import './BeforeAfter.css'
import before1 from '../images/before1.webp';
import after1 from '../images/after1.webp';
import before2 from '../images/before2.webp';
import after2 from '../images/after2.webp';
import before3 from '../images/before5.webp';
import before4 from '../images/before6.webp';
import after4 from '../images/after6.webp';
import after5 from '../images/after5.webp';



const BeforeAfter = () => {
    return (

        <section id="gallery-1897">
  <div className="cs-container">
    <div className="cs-content">
      <div className="cs-flex">
        <span className="cs-topper">Before and After</span>
        <h2 className="cs-title">Results You Can See, Quality You Can Trust</h2>
      </div>
    </div>
    {/* Gallery */}
    <div className="cs-gallery">
      {[
        {
          text: "Chemicals balanced, results in eight hours",
          beforeSrc:
            before1,
          afterSrc:
            after1,
        },
        {
          text: "Acid Wash to remove rust and dirt build-up",
          beforeSrc:
          before2,
          afterSrc:
          after2,
        },
        {
          text: "Filter and concrete stand installation",
          beforeSrc:
          before3,
          afterSrc:
          after5,
        },
        {
          text: "Stair install ",
          beforeSrc:
          before4,
          afterSrc:
          after4,
        },
      ].map((item, index) => (
        <div className="cs-item" key={index}>
          <div className="cs-picture-group">
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet={item.beforeSrc}
              />
              <source
                media="(min-width: 601px)"
                srcSet={item.beforeSrc}
              />
              <img
                loading="lazy"
                decoding="async"
                src={item.beforeSrc}
                alt="gallery"
                width="305"
                height="400"
              />
            </picture>
            <span className="cs-tag">Before</span>
          </div>
          <div className="cs-picture-group">
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet={item.afterSrc}
              />
              <source
                media="(min-width: 601px)"
                srcSet={item.afterSrc}
              />
              <img
                loading="lazy"
                decoding="async"
                src={item.afterSrc}
                alt="gallery"
                width="305"
                height="400"
              />
            </picture>
            <span className="cs-tag">After</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    )
}

export default BeforeAfter;
