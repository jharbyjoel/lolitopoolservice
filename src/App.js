import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import Appointment from './components/Appointment';
import { Footer } from './components/Footer';
import LandingPage from './components/LandingPage';
import NavBar from './components/Navbar';
import ServicesPage from './components/ServicesPage';


function App() {

  return (
    <Router>
        <>
          <NavBar /> {/* Show Navbar after login */}
          <Routes>
          <Route path="/home" element={<LandingPage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* Home page */}
          <Route path="/services" element={<ServicesPage />} /> {/* Home page */}
          <Route path='/BookAnAppointment' element={<Appointment />} />
          <Route path='/contact-us' element={<Appointment />} />
            {/* Add other routes here */}
          </Routes>
         
          <Footer />
        
        </>
    </Router>
  );
}

export default App;
