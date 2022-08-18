import React from 'react';
import './events.css';
import '../../App.css';

function Events () {
    return (
        <section id="events">
          <div className="events events__space">
              <div className="container">
                    <div className="col__7a">
                       <h1 className="events__heading">
                          Upcoming events
                      </h1>
                    </div>
                       
                      <div className="events__row">
                      
                        <div className="col__7">
                          <div className="events__logo">
                            <div className="events__details">
                                <p className="events__date">17</p>
                                <p className="events__month">Sep</p>
                                <p className="events__year">2022</p>
                            </div>
                           <div className="events__info-details">
                             <div className="events__info"> Fintech & Key Investment Conference</div>
                           <div className="events__texts">1:00pm - 2:00pm</div>
                          </div>

                      
                      </div>
                   
                     
                        </div>

                        <div className="col__7">
                        <div className="events__logo">
                            <div className="events__details">
                                <p className="events__date">20</p>
                                <p className="events__month">Nov</p>
                                <p className="events__year">2022</p>
                            </div>                         
                            <div className="events__info-details">
                           <div className="events__info"> International conference on engineering</div>
                           <div className="events__texts"> 1:00pm - 2:00pm Freeton grand hall</div>
                          </div>
                        </div>
                        </div>


                      
                        <div className="col__7">
                        <div className="events__logo">
                        <div className="events__details">
                                <p className="events__date">14</p>
                                <p className="events__month">Jan</p>
                                <p className="events__year">2023</p>
                            </div>                         
                            <div className="events__info-details">
                           <div className="events__info"> Digital art - a future for the film industry</div>
                           <div className="events__texts"> 1:00pm - 2:00pm freeton grand hall</div>
                          </div>
                        </div>
                        </div>
                     </div>

                   <div className="col__7a">
                        <div className="events__button d__flex align__items__center">
                            <button href="/" className="button">View More</button>
                       </div>
                     </div>
              </div>
          </div>
      </section>
    )
}

export default Events;