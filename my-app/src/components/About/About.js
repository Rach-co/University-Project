import React from 'react';
import './about.css';
import '../../App.css';
import { FaGraduationCap } from 'react-icons/fa';
import ReactPlayer from 'react-player';


function About () {
    return (
        <section id="about">
           <div className="about about__space" id="about">
                <div className="container">
                    <div className="about__row">
                        <div className="about__col">
                            <h1 className="about__heading">
                              About Heritage
                           </h1>    

                           <h3 className="about__sub-heading">world class knowledge</h3>
                    
                            <div className="about__meta">
                               <p className="about__text">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              </p>
             
                              <p className="about__text">
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                               </p>
                              <div className="about__button d__flex align__items__center">
                                 <button className="button">read more</button>
                              </div>
                         </div>
                      </div>

                        <div className="about__col"> 
                     
                           <div className='player-wrapper'>
                             <ReactPlayer
                                 className='react-player'
                                 url='https://www.youtube.com/watch?v=d_Y6P9ROO80'
                                 width='100%'
                                 height='100%'
                                 muted={true}
                                 playing={false}
                                 playIcon={<button>Play</button>}
                                 loop={true}
                                />
                              <div className="video__description">
                                 <FaGraduationCap class='video__icon'/>
                                  <div className="video__details">
                                     <div className="video__text">The University of Heritage</div>
                                     <div className="video__address">Nigeria</div>
                                  </div>
                                </div>
                          </div> 

                        </div>

                    </div>
                
                </div>
            </div>

        </section>
    )
}

export default About;