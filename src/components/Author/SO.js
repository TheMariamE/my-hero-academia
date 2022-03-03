import React from 'react';
import seriesoneshots from './seriesoneshots.js';
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
                    <Swiper spaceBetween={25} slidesPerView={3} navigation={true} loop={true} className="mySwiper container">
                            {seriesoneshots.map((item) => (
                                <SwiperSlide>
                                <div className="so-container-overlay">
                                    <img src={item.img} alt="Avatar" className="so-image"></img>
                                    <div className="so-overlay">
                                        <h2 className="so-text">{item.title}</h2>
                                        <p className="so-p">{item.genre}</p>
                                        <p className="so-p">{item.year}</p>
                                    </div>
                                </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SO;