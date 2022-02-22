import React from 'react';
import g1 from "../../images/grid1.jpg";
import g2 from "../../images/grid2.jpg";
import g3 from "../../images/grid3.jpg";
import g4 from "../../images/grid4.jpg";
import g5 from "../../images/grid5.jpg";
import g6 from "../../images/grid6.jpg";
import g7 from "../../images/grid7.jpg";
import g8 from "../../images/grid8.jpg";
import g9 from "../../images/grid9.jpg";
import g10 from "../../images/grid10.jpg";
import g11 from "../../images/grid11.jpg";
import g12 from "../../images/grid12.jpg";

const AUGrid = () => {
  return (
    <>
    <div id="au-grid" className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g1} alt="My Hero Academia - Izuku Midoriya"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g2} alt="My Hero Academia - Shoto Todoroki"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g3} alt="My Hero Academia - Katsuki Bakugo"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g4} alt="My Hero Academia - Eijiro Kirishima"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g5} alt="My Hero Academia - Tsuyu Asui"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r1'>
          <img src={g6} alt="My Hero Academia - Hitoshi Shinso"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g7} alt="My Hero Academia - Tenya Iida"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g8} alt="My Hero Academia - Itsuka Kendo"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g9} alt="My Hero Academia - Tamaki Amajiki"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g10} alt="My Hero Academia - Mirio Togata"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g11} alt="My Hero Academia - Nejire Hado"></img>
        </div>
        <div className='col-lg-2 col-sm-3 au-r2'>
          <img src={g12} alt="My Hero Academia - Mei Hatsume"></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default AUGrid;