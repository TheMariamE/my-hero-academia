import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import logo from "../../images/mainbanner.jpg";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
    return (
        <div id="home-carousel" className='container-fluid'>
            <h2>WATCH ONLINE  ALL SEASONS OF MY HERO ACADEMIA</h2>
            <Swiper spaceBetween={20} pagination={{ "dynamicBullets": true }} slidesPerView={3} navigation={true} loop={true} className="mySwiper container">
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 1</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 2</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 3</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 4</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 5</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card hc-season text-white">
                        <img className="card-img" src={logo} alt="My Hero Academia - Logo"></img>
                        <div class="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="#" className="stretched-link" rel="noreferrer">Season 6</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;
