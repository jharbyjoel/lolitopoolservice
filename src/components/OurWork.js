import React from "react";
import './OurWork.css';
import Picture1 from '../images/IMG_1703.webp';
import Picture2 from '../images/IMG_1704.webp';
import Picture3 from '../images/IMG_1705.webp';
import Picture4 from '../images/IMG_1719.webp';
import Picture5 from '../images/gallery1.webp';
import Picture6 from '../images/gallery2.webp';
import Picture7 from '../images/gallery3.webp';
import Picture8 from '../images/gallery4.webp';
import Picture9 from '../images/gallery5.webp';
import Picture10 from '../images/gallery6.webp';
import Gallery from "./Gallery";





const OurWork = () => {
  // Create an array of your images
  const images = [Picture1,Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10];

  return (
    <div>
      {/* Banner Section */}
      <div id="banner-1400">
        <div className="cs-container">
          <span className="cs-int-title">Our Work</span>
          <div className="cs-breadcrumbs">
            <a href="/home" className="cs-link">Home</a>
            <a href="our-work" className="cs-link cs-active">Our Work</a>
          </div>
        </div>
        {/* Background Image */}
        <picture className="cs-background">
          <source
            media="(max-width: 600px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-laughing.jpg"
          />
          <source
            media="(min-width: 601px)"
            srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-laughing.jpg"
          />
          <img
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-laughing.jpg"
            alt="people laughing"
            width="1280"
            height="568"
            aria-hidden="true"
          />
        </picture>
      </div>

      {/* Gallery Section */}
      <section id="gallery-1086">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Work</span>
            <h2 className="cs-title">Our Gallery</h2>
          </div>
          <div className="cs-image-group">
            {images.map((image, index) => (
              <picture key={index} className={`cs-picture cs-picture${index + 1}`}>
                <source
                  media="(max-width: 600px)"
                  srcSet={image}
                />
                <source
                  media="(min-width: 601px)"
                  srcSet={image}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={image}
                  alt={`Image ${index + 1}`}
                  width="345"
                  height="345"
                />
              </picture>
            ))}
          </div>
        </div>
        <Gallery />
      </section>
    </div>
  );
};

export default OurWork;
