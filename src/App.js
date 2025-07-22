import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import AboutPage from './components/AboutPage';
import Appointment from './components/Appointment';
import { Footer } from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import ServicesPage from './components/ServicesPage';
import OurWork from './components/OurWork';

function App() {
  const { i18n } = useTranslation(); // Get i18n instance for language switching

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change language based on button click
  };

  return (
    <Router>
      <>
        <NavBar />
        {/* Language switch buttons
        <div className="language-buttons">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('es')}>Español</button>
        </div> */}

        <Routes>
          <Route path='/' element={<LandingPage />} /> {/* Home page */}
          <Route path='/home' element={<LandingPage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/BookAnAppointment' element={<Appointment />} />
          <Route path='/contact-us' element={<Appointment />} />
          <Route path='/our-work' element={<OurWork />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
