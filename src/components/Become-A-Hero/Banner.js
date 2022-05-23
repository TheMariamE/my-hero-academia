import React from 'react';
import images from './images.js'; 

const Banner = () => {
  return (
    <div id="hero-banner" className='main-banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img src={images.logo} alt="My Hero Academia - Main Banner"></img>
                </div>
                <div className="col-lg-12 desc-au-banner">
                    <h1>BECOME A HERO!</h1>
                </div>
                <div class="col-lg-12 desc-au-banner">
                    <h4>[ Coming Soon ]</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;