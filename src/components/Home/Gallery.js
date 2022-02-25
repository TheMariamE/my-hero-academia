import React from 'react';
// import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
import images from './images.js';

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
      img: images.g1,
      title: 'My Hero Academia - Plus Ultra',
      featured: true,
    },
    {
      img: images.g2,
      title: 'My Hero Academia - Eijiro Kirishima',
    },
    {
      img: images.g3,
      title: 'My Hero Academia - Shoto Todoroki',
    },
    {
      img: images.g4,
      title: 'My Hero Academia - Ochaco Uraraka',
    },
    {
      img: images.g5,
      title: 'My Hero Academia - Plus Ultra 2',
      featured: true,
    },
    {
      img: images.g6,
      title: 'My Hero Academia - Tsuyu Asui',
    },
    {
      img: images.g7,
      title: 'My Hero Academia - Fumikagi Tokoyami',
    },
    {
      img: images.g8,
      title: 'My Hero Academia - Tenya Iida',
    },
    {
      img: images.g9,
      title: 'My Hero Academia - Denki Kaminari',
    }
  ];

export default Gallery;
