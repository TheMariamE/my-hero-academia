import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '90vh' }}
                id="season-tabs"
                >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
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
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div id="episodes" class="container">
                        <h2>WATCH ALL SEASONS NOW!</h2>
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