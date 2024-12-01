import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ContentGroups from './components/ContentGroups';
import ContactSection from './components/ContactForm';
import BeforeAfter from './components/BeforeAfter';
import WhyUs from './components/WhyUs';
import { ContactSectionFooter, Footer } from './components/Footer';
import Reviews from './components/Reviews';


function App() {

  return (
    <Router>
        <>
          <NavBar /> {/* Show Navbar after login */}
          <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Home page */}
            {/* Add other routes here */}
          </Routes>
          <ContactSection />
          <ContentGroups />
          <WhyUs />
          <Reviews /> 
          <ContactSectionFooter />

          <Footer />
        
        </>
    </Router>
  );
}

export default App;
