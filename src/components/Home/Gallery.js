import React from 'react';
// import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
import g1 from "../../images/gallery-1.jpg";
import g2 from "../../images/gallery-2.jpg";
import g3 from "../../images/gallery-3.jpg";
import g4 from "../../images/gallery-4.jpg";
import g5 from "../../images/gallery-5.jpg";
import g6 from "../../images/gallery-6.jpg";
import g7 from "../../images/gallery-7.jpg";
import g8 from "../../images/gallery-8.jpg";
import g9 from "../../images/gallery-9.jpg";

function srcset(image, width, height, rows = 1, cols = 12) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const Gallery = () => {
    return (
        <ImageList id="gallery" className='container-fluid'
        sx={{
             gridTemplateColumns: 'repeat(5, 1fr) !important',
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
          padding: '15px',
        }}
        gap={15}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 0;
          const rows = item.featured ? 2 : 1;
  
          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    );
  }
  
  const itemData = [
    {
      img: g1,
      title: 'Breakfast',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: g2,
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: g3,
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: g4,
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: g5,
      title: 'Hats',
      author: '@hjrc33',
      featured: true,
    },
    {
      img: g6,
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: g7,
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: g8,
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: g9,
      title: 'Mushrooms',
      author: '@silverdalex',
    }
  ];
        // <div id="gallery" className='container-fluid'>
        //     {/* <Grid container spacing={2}>
        //         <Grid item xs={6} md={4}>
        //             <img className="card-img" src={g1} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={2}>
        //             <img className="card-img" src={g2} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={2}>
        //             <img className="card-img" src={g3} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={2}>
        //             <img className="card-img" src={g1} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={2}>
        //             <img className="card-img" src={g1} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={4}>
        //             <img className="card-img" src={g1} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //         <Grid item xs={6} md={4}>
        //             <img className="card-img" src={g4} alt="My Hero Academia - Logo"></img>
        //         </Grid>
        //     </Grid> */}
        // </div>

export default Gallery;
