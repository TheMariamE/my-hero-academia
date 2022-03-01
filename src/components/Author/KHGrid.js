import React from 'react';
import images from './images.js';

const KHGrid = () => {
  return (
<div id="kh-grid" className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh1} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh2} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh3} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh4} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh5} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh6} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
      </div>
    </div>
  )
}

export default KHGrid;