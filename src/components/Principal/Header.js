import React from 'react';
import { Link } from 'react-router-dom';
import images from './images.js';

const Header = () => {
    return (
      <>
        {/* Navigation */}
        <nav id="mha-nav" className="navbar navbar-expand-lg sticky-top navbar-dark">
          <div className="container">
            <a className="navbar-brand hide" href="/"><img src={images.logo} alt="My Hero Academia - Logo"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <Link className="home nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="about nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="author nav-link" to="/author">Author</Link>
                </li>
                <li className="nav-item">
                  <Link className="episodes nav-link" to="/episodes">Episodes</Link>
                </li>
                <li className="nav-item">
                  <Link className="contact nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="hero nav-link" to="/become-a-hero">Become a Hero!</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}

export default Header;
