import React from 'react';
import images from './images.js';

const KHGrid2 = () => {
  return (
<div id="kh-grid" className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh7} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh8} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh9} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh10} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r2'>
          <img src={images.kh11} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
        <div className='col-lg-2 col-sm-4 col-6 au-r1'>
          <img src={images.kh12} alt="Kohei Horikoshi - Manga Gallery"></img>
        </div>
      </div>
    </div>
  )
}

export default KHGrid2;