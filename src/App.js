import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContentGroups from './components/ContentGroups';
import { ContactSectionFooter, Footer } from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import Reviews from './components/Reviews';
import WhyUs from './components/WhyUs';


function App() {

  return (
    <Router>
        <>
          <NavBar /> {/* Show Navbar after login */}
          <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Home page */}
            {/* Add other routes here */}
          </Routes>
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
