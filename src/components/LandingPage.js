import React, { useState, useRef } from "react";
import './LandingPage.css';
import LandingPageVideo from '../images/LandingPageBackground.mp4';
import TypesOfServices from "./TypesOfServices";
import ContentGroups from "./ContentGroups";
import BeforeAfter from "./BeforeAfter";
import WhyUs from "./WhyUs";
import Reviews from "./Reviews";
import ContactSection from "./ContactForm";
import SaltAndClorine from "./SaltAndClorine";
import { useTranslation } from "react-i18next";  // Import the useTranslation hook

const LandingPage = () => {
  const [isPlayButtonVisible, setPlayButtonVisible] = useState(true);
  const videoRef = useRef(null);
  const { t } = useTranslation();  // Get the t function for translations

  const togglePlayButton = () => {
    setPlayButtonVisible(!isPlayButtonVisible);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    togglePlayButton();
  };

  return (
    <>
      <section id="hero-2042">
        <div className="cs-container">
          <div className="cs-content">
          <span className="cs-topper">{t('companyName')}</span> {/* Use translated company name */}
          <h1 className="cs-title">{t('heroTitle')}</h1> {/* Use translated title */}
            <p className="cs-text">
              {t('heroDescription')} {/* Use translated description */}
            </p>
            <div className="cs-button-group">
              <a href="/contact-us" className="cs-button-solid">
                {t('scheduleService')} {/* Translate button text */}
              </a>
            </div>
          </div>
          {isPlayButtonVisible && (
            <button
              className="cs-play"
              aria-label="click to play video"
              onClick={toggleVideoPlayback}
            >
              <img
                className="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/play-right.svg"
                alt="play icon"
                width="24"
                height="24"
                aria-hidden="true"
                decoding="async"
              />
            </button>
          )}
        </div>

        <div
          className="cs-video-wrapper"
          aria-label="video wrapper"
          onClick={toggleVideoPlayback}
          role="button"
        >
          <video
            ref={videoRef}
            loading="lazy"
            src={LandingPageVideo}
            muted
            playsInline
            autoPlay={true}
            loop
            className="cs-video"
            onClick={(e) => e.stopPropagation()} // Prevent parent click handler from triggering
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Add the TypesOfServices component here */}
      <TypesOfServices />
      <ContentGroups />
      <SaltAndClorine />
      <BeforeAfter />
      <WhyUs />
      <Reviews />
      <ContactSection />
    </>
  );
};

export default LandingPage;
