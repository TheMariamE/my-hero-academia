import React from 'react';
import images from './images.js';

const AUGrid2 = () => {
  return (
<div id="au-grid2" className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g13} alt="My Hero Academia - Izuku Midoriya"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g14} alt="My Hero Academia - Shoto Todoroki"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g15} alt="My Hero Academia - Katsuki Bakugo"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g16} alt="My Hero Academia - Eijiro Kirishima"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g17} alt="My Hero Academia - Tsuyu Asui"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={images.g18} alt="My Hero Academia - Hitoshi Shinso"></img>
        </div>
      </div>
    </div>
  )
}

export default AUGrid2;