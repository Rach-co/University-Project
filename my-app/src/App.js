import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      
    </>
  );
}

export default App;
