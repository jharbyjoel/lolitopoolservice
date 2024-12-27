import React from "react";
import './OurWork.css';
import Picture1 from '../images/gallery7.webp';
import Picture2 from '../images/gallery8.webp';
import Picture3 from '../images/gallery9.webp';
import Picture4 from '../images/gallery10.webp';
import Picture5 from '../images/gallery11.webp';
import Picture6 from '../images/gallery12.webp';
import Picture9 from '../images/gallery13.webp';
import Picture10 from '../images/gallery14.webp';





const Gallery = () => {
  // Create an array of your images
  const images = [Picture1, Picture2, Picture3, Picture6, Picture4, Picture5, Picture9, Picture10];

  return (
    <div>
      {/* Gallery Section */}
      <section id="gallery-1086">
        <div className="cs-container">
          <div className="cs-content">
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
      </section>
    </div>
  );
};

export default Gallery;
