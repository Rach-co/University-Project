import React from 'react';
import './herosection.css';
import '../../App.css';
// import Button from 'react-bootstrap/Button';


function HeroSection () {
    return (
        <section id="home" className="heropage">
            <div className="content">
              <h1>Welcome to The University of Heritage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div>
                 <button href="/" className="button">Explore More</button>

                </div>
            </div>
        </section>
    )
}

export default HeroSection