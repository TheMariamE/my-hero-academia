import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

const Header = () => {
    return (
      <div className='top-bar'>
        {/* Top Bar */}
        <div className="container tb">
          <div className='row'>
            <div className="col-lg-7">
              <p>WATCH MY HERO ACADEMIA´S SEASON 5 NOW ON <a href="#" target="_blank">CRUNCHYROLL</a>!</p>
            </div>
            <div className="col-lg-5">
              <p className='manga'>READ MY HERO ACADEMIA´S MANGA <a href="#" target="_blank">HERE</a></p>
            </div>
          </div>
        </div>
        {/* Navigation */}
        <nav id="mha-nav" className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand hide" href="/"><img src={logo} alt="My Hero Academia - Logo"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/author">Author</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/episodes">Episodes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/become-a-hero">Become a Hero!</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Header;
