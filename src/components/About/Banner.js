import React from 'react';
import logo from "../../images/logo.png";

const Banner = () => {
    return (
        <div id="au-banner" className='main-banner'>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img src={logo} alt="My Hero Academia - Main Banner"></img>
                    </div>
                    <div class="col-lg-6 desc-au-banner">
                        <h1>ABOUT 
                        {"\n"}
                        MY HERO ACADEMIA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
