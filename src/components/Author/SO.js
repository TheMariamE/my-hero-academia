import React from 'react';
import images from './images.js';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

SwiperCore.use([Pagination, Navigation]);

const SO = () => {
  return (
    <div id="series-oneshots" className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2>SERIES & Oneshots</h2>
                    <Swiper spaceBetween={20} pagination={{ "dynamicBullets": true }} slidesPerView={3} navigation={true} loop={true} className="mySwiper container">
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2016" rel="noreferrer" target="_blank"><img className="card-img" src={images.s1} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2016" className="stretched-link" rel="noreferrer" target="_blank">Season 1</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2nd-season" rel="noreferrer" target="_blank"><img className="card-img" src={images.s2} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-2nd-season" className="stretched-link" rel="noreferrer" target="_blank">Season 2</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-3rd-season" rel="noreferrer" target="_blank"><img className="card-img" src={images.s3} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-3rd-season" className="stretched-link" rel="noreferrer" target="_blank">Season 3</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-4th-season" rel="noreferrer" target="_blank"><img className="card-img" src={images.s4} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-4th-season" className="stretched-link" rel="noreferrer" target="_blank">Season 4</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-5th-season" rel="noreferrer" target="_blank"><img className="card-img" src={images.s5} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www3.animeflv.net/anime/boku-no-hero-academia-5th-season" className="stretched-link" rel="noreferrer" target="_blank">Season 5</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card hc-season text-white">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank"><img className="card-img" src={images.s6} alt="My Hero Academia - Logo"></img></a>
                                <div className="card-img-overlay card-body">
                                    <h5 className="card-title">
                                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="stretched-link" rel="noreferrer" target="_blank">Season 6</a>
                                    </h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SO;