import React from 'react';
import './facilities.css';
import '../../App.css';
import { FaNewspaper, FaGraduationCap } from 'react-icons/fa';
import { FaAward, FaBook } from 'react-icons/fa';
import ReactPlayer from 'react-player';


function Facilities () {
    return (
        <section id="facilities">
          <div className="facilities facilities__space">
                <div className="container">
                    <div className="facilities__row">
                        <div className="facilities__col">
                        <h1 className="facilities__heading">
                         Our Facilities
                      </h1>    
                      <div className="facilities__desc">
                      <div className="facilities__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                      </div>

                      <div className="facilities__mini-row">
                        <div className="facilities__logo">
                        <FaNewspaper className="facilities__badge"/>
                         <div className="facilities__details">
                           <div className="facilities__info"> Global certificate</div>
                           <div className="facilities__texts"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                          </div>
                        </div>

                        <div className="facilities__logo">
                         <FaAward className="facilities__badge"/>
                         <div className="facilities__details">
                          <div className="facilities__info"> Alumni Support</div>
                         <div className="facilities__texts"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                          </div>
                        </div>

                        <div className="facilities__logo">
                         <FaBook className="facilities__badge" />
                         <div className="facilities__details">
                          <div className="facilities__info"> Books & library</div>
                         <div className="facilities__texts"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                          </div>
                        </div>
                      </div>
                   
                     </div>

                        <div className="facilities__col"> 
                     
                           <div className='player-wrapper'>
                             <ReactPlayer
                                 className='react-player'
                                 url='https://www.youtube.com/watch?v=ktw2qM-qoYI'
                                 width='100%'
                                 height='100%'
                                 muted={true}
                                 playing={false}
                                 playIcon={<button>Play</button>}
                                 loop={true}
                                />
                                <div className="facilities__description">
                                  <FaGraduationCap class='facilities__icon'/>
                                  <div className="facilities__details">
                                     <div className="facitilities__text">The University of Heritage</div>
                                     <div className="facilities__address">Nigeria</div>
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

export default Facilities;