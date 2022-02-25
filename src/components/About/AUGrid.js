import React from 'react';
import images from './images.js';

const AUGrid = () => {
  return (
    <>
    <div id="au-grid" className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g1} alt="My Hero Academia - Izuku Midoriya"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g2} alt="My Hero Academia - Shoto Todoroki"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g3} alt="My Hero Academia - Katsuki Bakugo"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g4} alt="My Hero Academia - Eijiro Kirishima"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g5} alt="My Hero Academia - Tsuyu Asui"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g6} alt="My Hero Academia - Hitoshi Shinso"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g7} alt="My Hero Academia - Tenya Iida"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g8} alt="My Hero Academia - Itsuka Kendo"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g9} alt="My Hero Academia - Tamaki Amajiki"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g10} alt="My Hero Academia - Mirio Togata"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g11} alt="My Hero Academia - Nejire Hado"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={images.g12} alt="My Hero Academia - Mei Hatsume"></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default AUGrid;