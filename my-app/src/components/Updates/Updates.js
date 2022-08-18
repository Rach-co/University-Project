import React from 'react';
import './updates.css';
import '../../App.css';
import Img1  from './../../assests/Img1.jpg';
import Img2  from './../../assests/Img2.jpg';
import Img3  from './../../assests/Img3.jpg';

function Updates () {
    return (
      <section id="updates">
          <div className="updates updates__space">
                <div className="container">
                      <div className="col__6a">
                         <h1 className="facilities__heading">
                             News & Updates
                        </h1>
                      </div>
                    <div className="updates__row">
                         

                        <div className="updates__row">
                        
                          <div className="col__6">
                              <div className="gallery">
                                   <img src={Img1} className="updates__image" alt=""/>
                                   <div className="updates__description">
                                      Seven Heritage academics elected British Academy fellows                   
                                  </div>
                                  <div className="updates__more">Read more</div>
                                 <div className="updates__date">22 Aug 2022</div>
                              </div>
                          </div>

                          <div className="col__6">
                              <div className="gallery">
                                  <img src={Img2} className="updates__image" alt=""/>
                                  <div className="updates__description">
                                     The researchers at Heritage help create the most complete polygenic tree
                                  </div>
                                 <div className="updates__more">Read more</div>
                                 <div className="updates__date">22 Aug 2022</div>
                              </div>
                          </div>

 
                          <div className="col__6"> 
                               <div className="gallery">
                                  <img src={Img3} className="updates__image" alt=""/>
                                  <div className="updates__description">
                                     A global MBA from the next generation of business leaders                   
                                  </div>
                                  <div className="updates__more">Read more</div>
                                  <div className="updates__date">22 Aug 2022</div>
                              </div>
                          </div>

                       </div>

                       
                    </div>
                     <div className="col__6a">
                          <div className="updates__button d__flex align__items__center">
                              <button href="/" className="button">View More</button>
                         </div>
                       </div>
                </div>
            </div>
        </section>
    )
}

export default Updates;