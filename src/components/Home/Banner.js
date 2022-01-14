import React from 'react';
import logo from "../../images/logo.png";

const Banner = () => {
    return (
        <div id="home-banner" className='main-banner'>
            <div className='container'>
                <img src={logo} alt="My Hero Academia - Main Banner"></img>
            </div>
        </div>
    )
}

export default Banner;
