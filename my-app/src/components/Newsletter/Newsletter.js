import React from 'react';
import './newsletter.css';
import '../../App.css';

function Newsletter() {
  return (
    <div>
      <div class="newsletter newsletter__space">
                <div className="container">
                    <div className="newsletter__heading">To get the latest & updates news</div>
                    <div className="newsletter__heading">subscribe to our newsletter</div>

                   
                    <div className="box">
                        <form action="#">
                            <div className="form-box">
                                <input type="text" name="EmailAddress" placeholder="Enter your email"/>
                                <button type="submit">Subscribe</button>
                             </div>
                        </form>
                    </div>
                
                </div>
                </div>
    </div>
  )
}

export default Newsletter
