import React from 'react';
import './apply.css';
import '../../App.css';
import Apply1 from './../../assests/ApplyImg.jpg'

function Apply () {
    return (
     <section id="apply" className="apply apply__space">
       
       <div className='apply__background'>
            <img src={Apply1} alt="" className="apply__img"/>

            <div className="apply__content">
              <h1 className="apply__heading">Apply for admission</h1>
              <h3 className="apply__sub-heading">Fall 2022 applications are open</h3>
              <p className="apply__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div>
               <button className="button">Apply</button>
             </div>
           </div>
           </div>
     </section>
    )
}

export default Apply;