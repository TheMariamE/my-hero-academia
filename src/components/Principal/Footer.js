import React from 'react';
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer>
            {/* Suscription */}
            {/* Footer */}
            <div id="footer" className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='desc col-lg-6'>
                            <Link className="nav-link" to="/">
                                <img id="f-logo" src={logo} alt="My Hero Academia - Main Banner"></img>
                            </Link>
                            <p>
                            Manga written and illustrated by Kohei Horikoshi and is published in Weekly Shonen Jump. The first chapter was published on July 7, 2014, in issue 32 of Weekly Shonen Jump.
                            </p>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Navigation</h6>
                            <ul className="footer-nav">
                                <li>
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/author">Author</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/episodes">Episodes</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Plus Ultra</h6>
                            <ul className="footer-nav">
                                <li>
                                    <a className="nav-link" href="/become-a-hero" target="_blank" rel="noreferrer">Become a Hero</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="https://myheroacademia.fandom.com/f" target="_blank" rel="noreferrer">Discuss in Forum</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="https://boku-no-hero-academia.com/" target="_blank" rel="noreferrer">Read the Manga</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="https://www.crunchyroll.com/my-hero-academia" target="_blank" rel="noreferrer">Watch the Anime</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Follow Us</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright" className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <p>Boku no Hero Academia</p>
                        </div>
                        <div className='col-lg-6'>
                            <p>Copyright © 2021. No rights reserved. | Web Design by Mariam Edwards.</p>
                        </div>
                    </div>
                </div>
            </div>    
            {/* Copyright Footer */}
        </footer>
        </>
    )
}

export default Footer;
