import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import s1 from "../../images/season-1.jpg";
import s2 from "../../images/season-2.jpg";
import s3 from "../../images/season-3.jpg";
import s4 from "../../images/season-4.jpg";
import s5 from "../../images/season-5.jpg";
import s6 from "../../images/season-6.jpg";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
    return (
        <div id="home-carousel" className='container-fluid'>
            <h2>WATCH ONLINE  ALL SEASONS OF MY HERO ACADEMIA</h2>
            <Swiper spaceBetween={20} pagination={{ "dynamicBullets": true }} slidesPerView={3} navigation={true} loop={true} className="mySwiper container">
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2016" rel="noreferrer" target="_blank"><img className="card-img" src={s1} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2016" className="stretched-link" rel="noreferrer" target="_blank">Season 1</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2nd-season" rel="noreferrer" target="_blank"><img className="card-img" src={s2} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2nd-season" className="stretched-link" rel="noreferrer" target="_blank">Season 2</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-3rd-season" rel="noreferrer" target="_blank"><img className="card-img" src={s3} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-3rd-season" className="stretched-link" rel="noreferrer" target="_blank">Season 3</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-4th-season" rel="noreferrer" target="_blank"><img className="card-img" src={s4} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-4th-season" className="stretched-link" rel="noreferrer" target="_blank">Season 4</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-5th-season" rel="noreferrer" target="_blank"><img className="card-img" src={s5} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-5th-season" className="stretched-link" rel="noreferrer" target="_blank">Season 5</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card hc-season text-white">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank"><img className="card-img" src={s6} alt="My Hero Academia - Logo"></img></a>
                        <div className="card-img-overlay card-body">
                            <h5 className="card-title">
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="stretched-link" rel="noreferrer" target="_blank">Season 6</a>
                            </h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carousel;
