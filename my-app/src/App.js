import React from 'react';
import './App.css';
import HeroSection from './components/Hero/HeroSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Study from './components/Study/Study';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Study />
      
    </>
  );
}

export default App;
