import React from 'react';
import './reviews.css';
import Review1  from './../../assests/Review1.jpg';
import Review2  from './../../assests/Review2.jpg';
import Review3  from './../../assests/Review3.jpg';
import Review4  from './../../assests/Review4.jpg';



function Reviews () {
    return (
        <section id="reviews">
          <div className="reviews reviews__space">
                <div className="container">
                      <div className="reviews__cola">
                         <h1 className="reviews__heading">
                             Students Reviews
                        </h1>
                         <p className="reviews__text">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 

                            </p>
                      </div>
                    <div className="reviews__row">
                         

                        <div className="reviews__row">
                        
                          <div className="reviews__col">
                              <div className="students__reviews">
                                   <img src={Review1} className="reviews__image" alt=""/>
                                   <div className="reviews__description">
                                      John Eze                   
                                  </div>
                                  <div className="reviews__more">Industrial Physicist</div>
                                 <div className="reviews__date">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                              </div>
                          </div>

                          <div className="reviews__col">
                              <div className="students__reviews">
                                   <img src={Review2} className="reviews__image" alt=""/>
                                   <div className="reviews__description">
                                      Lilian Aderogbe                   
                                  </div>
                                  <div className="reviews__more">Medical Doctor</div>
                                  <div className="reviews__date">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                              </div>
                          </div>


                          <div className="reviews__col">
                              <div className="students__reviews">
                                   <img src={Review3} className="reviews__image" alt=""/>
                                   <div className="reviews__description">
                                      Bola Bantu                  
                                  </div>
                                  <div className="reviews__more">Pharmacist</div>
                                  <div className="reviews__date">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                              </div>
                          </div>

 
                          <div className="reviews__col">
                              <div className="students__reviews">
                                   <img src={Review4} className="reviews__image" alt=""/>
                                   <div className="reviews__description">
                                      Ade Jade                   
                                  </div>
                                  <div className="reviews__more">Economist</div>
                                  <div className="reviews__date">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                              </div>
                          </div>
                       </div>

                       
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Reviews;