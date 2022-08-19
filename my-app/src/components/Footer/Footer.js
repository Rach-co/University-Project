import React from 'react'
import './footer.css';
import '../../App.css';
import {FaTimes, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { SiTorbrowser } from 'react-icons/si';
import { GoLocation } from 'react-icons/go';



function Footer() {
  return (
      <section id="footer">
         <div className="footer footer__space">
            <div className="container">
           <div className="main__content">
           <div className="footer__box footer__left">
            <h2 className="footer__heading">Our Address</h2>
            <p class="footer__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer__socials">
                <a href="#"><FaTwitter className="footer__icon"/></a>
                <a href="#"><FaFacebookF className="footer__icon"/></a>
                <a href="#"><FaInstagram className="footer__icon"/></a>
                <a href="#"><FaLinkedin className="footer__icon"/></a>

            </div>
         </div>

         <div className="footer__box">
            <h2 className="footer__heading">About</h2>
            <div className="footer__content">
            Brief History
 
            </div>

            <div className="footer__content">
            Vision & Mission
 
            </div>

            <div className="footer__content">
            Accreditation
            </div>

            <div className="footer__content">
            International Recognition
 
            </div>
            <div className="footer__content">
            Facts about Heritage
 
            </div>

         </div>

         <div className="footer__box">
            <h2 className="footer__heading">News & Updates</h2>
            <div className="footer__content">
            Technology
 
            </div>

            <div className="footer__content">
            News
 
            </div>

            <div className="footer__content">
            Work Life
            </div>

            <div className="footer__content">
            Podcast
 
            </div>
            <div className="footer__content">
            Improve Skills
 
            </div>

         </div>


          <div className="footer__box footer__middle">
            <h2 className="footer__heading">About</h2>
            <div className="footer__content">
                <div className="footer__place">
                 <div><FiPhone className="footer__address-icon"/>
                 
                 </div>
                 <div className="footer__text">
                  +880-2-5566668362

                 </div> 
     
                </div>


                <div className="footer__place">
                 <div><AiOutlineMail className="footer__address-icon"/></div>
                 <div className="footer__text">
                 registrar@heritage.edu

                 </div> 
     
                </div>


                <div className="footer__place">
                 <div><SiTorbrowser className="footer__address-icon"/></div>
                 <div className="footer__text">
                 http://www.heritage.edu

                 </div> 
     
                </div>

                <div className="footer__place">
                 <div><GoLocation className="footer__address-icon"/></div>
                 <div className="footer__text">
                 Ikeja, Lagos State, Nigeria

                 </div> 
     
                </div>

            </div>
         </div>

         
           </div>
           
            </div>
         </div>


         <div class="footer__copy p-3 bg-white w-100">
          <div class="footer__row">
                 <div class="footer__copy-text">
                     Copyright &copy; 2022. The University of Heritage. All rights reserved. 
              </div>
               
          </div>
       </div>

      </section>
  )
}

export default Footer
