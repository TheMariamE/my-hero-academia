import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs, AppBar, Typography, Box, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material/';
import teachers from './teachers.js';
import staff from './ua-staff.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Staff() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  return (
    <>
    <div id="staff-tab" className='container'>
        <h2>U.A. HIGH SCHOOL STAFF</h2>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="transparent"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs"
            >
              <Tab label="STAFF" {...a11yProps(0)} />
              <Tab label="TEACHERS" {...a11yProps(1)} />
              <Tab label="CLASS 1-A" {...a11yProps(2)} />
              <Tab label="CLASS 1-B" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0}>
              <ImageList sx={{
              gridTemplateColumns: 'repeat(4, 1fr) !important',
              gap: '15px !important',
              }}>
                {staff.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                        >
                          {/* <InfoIcon /> */}
                        </IconButton>
                      }
                    />
              </ImageListItem>
                ))}
              </ImageList>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ImageList sx={{
              gridTemplateColumns: 'repeat(4, 1fr) !important',
              gap: '15px !important',
              }}>
                {teachers.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={item.author}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.title}`}
                        >
                          {/* <InfoIcon /> */}
                        </IconButton>
                      }
                    />
              </ImageListItem>
                ))}
              </ImageList>
            </TabPanel>
            <TabPanel value={value} index={2}>
              CLASS 1-A
            </TabPanel>
            <TabPanel value={value} index={3}>
              CLASS 1-B
            </TabPanel>
          </SwipeableViews>
    </div>
    </>
  )
};