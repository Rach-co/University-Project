import React from 'react';
import './study.css';
import '../../App.css';
import Me from './../../assests/Student.png'


function Study () {
    return (
        <section id="study">
          <div className="study study__space">
                <div className="container">
                    <div className="study__row">
                        <div className="study__col">
                        <h1 className="study__heading">
                         Why Choose <br /> University of Heritage
                      </h1>    

                    
                         <div className="study__meta">
                           
             
                         <p className="study__text">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 

                            </p>
                              <div className="study__button d__flex align__items__center">
                                  <button href="/" className="button">Apply</button>
                   
                               </div>
                            </div>
                        </div>

                        <div className="study__col"> 
                     
                        <div className="study__image">
                          <img src={Me} alt="" className="responsive" />

                        </div>
                        
                            
                        </div>
                    </div>
                
                </div>
            </div>
          
        
        </section>
    )
}

export default Study;