import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography, Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material/';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import episodes from './Episodes.js';

SwiperCore.use([Pagination, Navigation]);

//SEASON 1
var seasonOneSlideOne = episodes.slice(0, 8);
var seasonOneSlideTwo = episodes.slice(8, 15);
//SEASON 2
var seasonTwoSlideOne = episodes.slice(15, 22);
var seasonTwoSlideTwo = episodes.slice(16, 22);
//SEASON 3


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 4 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Seasons() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div id="seasons" className='container-fluid'>
        <div className='row'>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                id="season-tabs"
                >
                <Tabs
                    orientation="vertical"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Season 1" {...a11yProps(0)} />
                    <Tab label="Season 2" {...a11yProps(1)} />
                    <Tab label="Season 3" {...a11yProps(2)} />
                    <Tab label="Season 4" {...a11yProps(3)} />
                    <Tab label="Season 5" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                        <Swiper spaceBetween={27} slidesPerView={1} pagination={{clickable: true,}}loop={true} className="mySwiper container">
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonOneSlideOne.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonOneSlideTwo.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                        <Swiper spaceBetween={27} slidesPerView={1} pagination={{clickable: true,}}loop={true} className="mySwiper container">
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonTwoSlideOne.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonTwoSlideTwo.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                        <Swiper spaceBetween={27} slidesPerView={1} pagination={{clickable: true,}}loop={true} className="mySwiper container">
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonOneSlideOne.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                            <SwiperSlide>
                                <ImageList sx={{
                                gridTemplateColumns: 'repeat(4, 1fr) !important',
                                gap: '15px !important',
                                }}>
                                    {seasonOneSlideTwo.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        />
                                        <ImageListItemBar
                                        title={item.title}
                                        />
                                </ImageListItem>
                                ))}
                                </ImageList>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                    </div>
                </TabPanel>
            </Box>
        </div>
    </div>   
  )
}