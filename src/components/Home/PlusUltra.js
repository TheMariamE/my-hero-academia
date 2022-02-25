import React from 'react';
import images from './images.js';

const PlusUltra = () => {
    return (
        <div id="plus-ultra" className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5'>
                        <div className="alert alert-light" role="alert">Plus Ultra</div>
                    </div>
                    <h1>BOKU NO HERO ACADEMIA</h1>
                    <p>People are not born equal, a realization that four-year-old Izuku Midoriya faced when bullied by his classmates who had unique special powers. Izuku was one of the rare cases where he was born with absolutely no unique powers. This did not stop Izuku from pursuing his dream, a dream of becoming a great hero like the legendary All Might. To become the great hero he hopelessly wants to become, he will now join the ranks of one of the highest rated "Hero Academies" in the country: U.A. High School. </p>
                    <p>With the help of his idol All Might, will he be able to claim the ranks and become a true hero?</p>
                    <a className="btn-pu" href="https://boku-no-hero-academia.com/" role="button" rel="noreferrer" target="_blank">Read the manga now!</a>
                </div>
                <div className='col-lg-6'>
                    <div className='row' data-masonry='{ "percentPosition" : true }'>
                        <div className='col-sm-6 col-lg-6 mb-4'>
                            <a href="https://www.viz.com/read/manga/my-hero-academia-volume-4/product/3770" rel="noreferrer" target="_blank"><img className="card-img" src={images.p1} alt="My Hero Academia - Logo"></img></a>
                        </div>
                        <div className='col-sm-6 col-lg-6 mb-4 p2'>
                            <a href="https://www.viz.com/read/manga/my-hero-academia-volume-17/product/5820" rel="noreferrer" target="_blank"><img className="card-img" src={images.p2} alt="My Hero Academia - Logo"></img></a>
                        </div>
                        <div className='col-sm-6 col-lg-6 mb-4 p3'>
                            <a href="https://www.viz.com/read/manga/my-hero-academia-volume-30/product/6992" rel="noreferrer" target="_blank"><img className="card-img" src={images.p3} alt="My Hero Academia - Logo"></img></a>
                        </div>
                        <div className='col-sm-6 col-lg-6 mb-4'>
                            <a href="https://www.viz.com/read/manga/my-hero-academia-volume-24/product/6288" rel="noreferrer" target="_blank"><img className="card-img" src={images.p4} alt="My Hero Academia - Logo"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlusUltra;
