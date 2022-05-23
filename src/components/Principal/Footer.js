import React from 'react';
import images from './images.js';
import { Link } from 'react-router-dom';
import Suscription from './SuscriptionForm.js'

const Footer = () => {
    return (
        <>
        <footer>
            {/* Suscription */}
            <div id="f-suscription" className='container'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <h2>Suscribe to our daily hero based newsletter!</h2>
                    </div>
                    <div className='col-lg-5'>
                        <Suscription></Suscription>
                    </div>
                </div>    
            </div>
            {/* Footer */}
            <div id="footer" className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='desc col-lg-6'>
                            <Link className="nav-link" to="/">
                                <img id="f-logo" src={images.logo} alt="My Hero Academia - Main Banner"></img>
                            </Link>
                            <p>
                            Manga written and illustrated by Kohei Horikoshi and is published in Weekly Shonen Jump. The first chapter was published on July 7, 2014, in issue 32 of Weekly Shonen Jump.
                            </p>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Navigation</h6>
                            <ul className="footer-nav">
                                <li>
                                    <Link className="home nav-link" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="about nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link className="author nav-link" to="/author">Author</Link>
                                </li>
                                <li>
                                    <Link className="episodes nav-link" to="/episodes">Episodes</Link>
                                </li>
                                <li>
                                    <Link className="contact nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-2'>
                            <h6>Plus Ultra</h6>
                            <ul className="footer-nav">
                                <li>
                                    <Link className="hero nav-link" to="/become-a-hero">Become a Hero</Link>
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
                            <div className="row f-logos">
                                <div className="col-lg-6">
                                    <ul className="footer-nav">
                                        <li>
                                            <a className="nav-link" href="https://myheroacademia.fandom.com/" target="_blank" rel="noreferrer">
                                                <img src={images.fandom} alt="My Hero Academia - Fandom"></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="https://www.instagram.com/my.hero.academia/" target="_blank" rel="noreferrer">
                                                <img src={images.insta} alt="My Hero Academia - Instagram"></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="https://en.wikipedia.org/wiki/My_Hero_Academia" target="_blank" rel="noreferrer">
                                                <img src={images.wiki} alt="My Hero Academia - Wikipedia"></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="footer-nav">
                                        <li>
                                            <a className="nav-link" href="https://twitter.com/MHAOfficial" target="_blank" rel="noreferrer">
                                                <img src={images.twitter} alt="My Hero Academia - Twitter"></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="https://www.imdb.com/title/tt5626028/" target="_blank" rel="noreferrer">
                                                <img id="imdb-logo" src={images.imdb} alt="My Hero Academia - IMDB"></img>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="nav-link" href="https://www.tiktok.com/@myheroacademiagame?lang=en" target="_blank" rel="noreferrer">
                                                <img src={images.tt} alt="My Hero Academia - Tik Tok"></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
                            <p>All credit goes to the content owners. | Web Design by Mariam Edwards.</p>
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
