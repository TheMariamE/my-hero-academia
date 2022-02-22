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
      title: 'My Hero Academia - Plus Ultra',
      featured: true,
    },
    {
      img: g2,
      title: 'My Hero Academia - Eijiro Kirishima',
    },
    {
      img: g3,
      title: 'My Hero Academia - Shoto Todoroki',
    },
    {
      img: g4,
      title: 'My Hero Academia - Ochaco Uraraka',
    },
    {
      img: g5,
      title: 'My Hero Academia - Plus Ultra 2',
      featured: true,
    },
    {
      img: g6,
      title: 'My Hero Academia - Tsuyu Asui',
    },
    {
      img: g7,
      title: 'My Hero Academia - Fumikagi Tokoyami',
    },
    {
      img: g8,
      title: 'My Hero Academia - Tenya Iida',
    },
    {
      img: g9,
      title: 'My Hero Academia - Denki Kaminari',
    }
  ];

export default Gallery;
