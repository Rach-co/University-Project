import React from 'react';
import './record.css';
import '../../App.css';


function Record () {
    return (
        <section id="research">
          <div className="record record__space">
                <div className="container">
                    <div className="record__row">
                        <div className="record__col">
                         <div className="record__content">
                           <div className="record__heading">78K+</div> 
                            <p className="record__text">Total Students</p>
                         </div>
                    
                        </div>
                        <div className="record__col">
                        <div className="record__content">
                           <div className="record__heading">8K+</div> 
                            <p className="record__text">Topper Students</p>
                         </div>
                    
                    
                        </div>

                        <div className="record__col">
                        <div className="record__content">
                           <div className="record__heading">706+</div> 
                            <p className="record__text">Contributors</p>
                         </div>
                    
                    
                        </div>

                        <div className="col__4">
                        <div className="record__content">
                           <div className="record__heading">85+</div> 
                            <p className="record__text">Global Community</p>
                         </div>
                    
                        </div>
                    </div>

                
                </div>
            </div>
          
        
        </section>
    )
}

export default Record;