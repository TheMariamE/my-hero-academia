import React from 'react';
import images from './images.js'; 

const Banner = () => {
  return (
    <div id="author-banner" className='main-banner'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <img src={images.logo} alt="My Hero Academia - Main Banner"></img>
                </div>
                <div className="col-lg-12 desc-au-banner">
                    <h1>Kohei Horikoshi</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner;