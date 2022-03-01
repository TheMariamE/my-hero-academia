import React from 'react';
import images from './images.js';

const KH = () => {
  return (
    <div id="kohei" className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={images.kh} alt="Kohei Horikoshi - My Hero Academia"></img>
                </div>
                <div className='desc col-lg-6'>
                    <h1>Kohei Horikoshi</h1>
                    <p>Kohei Horikoshi (堀ほり越こし 耕こう平へい Horikoshi Kōhei), born November 20, 1986, is a Japanese manga artist known for creating the manga series My Hero Academia.</p>
                    <p>A mangaka from Aichi Prefecture, Kohei Horikoshi is a graduate of the Nagoya University of Arts. He was a former assistant for Yasuki Tanaka, creator, and author of the manga series Hitomi no Catoblepas and Kagijin.</p>
                    <a className="btn-pu" href="https://boku-no-hero-academia.com/" role="button" rel="noreferrer" target="_blank">PASS BY MY TWITTER!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KH;