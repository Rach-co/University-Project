import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Study from './components/Study/Study';
import Record from './components/Records/Record';
import Facilities from './components/Facilities/Facilities';
import Updates from './components/Updates/Updates';

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
    </>
  );
}

export default App;
