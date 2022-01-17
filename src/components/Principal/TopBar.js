import React from 'react';

const TopBar = () => {
    return (
        <div id="topbar" className='top-bar'>
            {/* Top Bar */}
            <div className="container tb">
            <div className='row'>
                <div className="col-lg-7">
                    <p>WATCH MY HERO ACADEMIA´S SEASON 5 NOW ON <a href="https://www.crunchyroll.com/my-hero-academia" target="_blank" rel="noreferrer">CRUNCHYROLL</a>!</p>
                </div>
                <div className="col-lg-5">
                    <p className='manga'>READ MY HERO ACADEMIA´S MANGA <a href="https://boku-no-hero-academia.com/" target="_blank" rel="noreferrer">HERE</a></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TopBar;
