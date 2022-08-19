import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Study from './components/Study/Study';
import Record from './components/Records/Record';
import Facilities from './components/Facilities/Facilities';
import Updates from './components/Updates/Updates';
import Apply from './components/Apply/Apply';
import Events from './components/Events/Events';
import Reviews from './components/Reviews/Reviews';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Study />
      <Record />
      <Facilities />
      <Updates />
      <Apply />
      <Events />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
