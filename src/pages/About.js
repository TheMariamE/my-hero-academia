import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/About/Banner';
import Grid from '../components/About/AUGrid';
import Staff from '../components/About/Staff';
import HS from '../components/About/HighSchool';
import Grid2 from '../components/About/AUGrid2';
import Footer from '../components/Principal/Footer';

const About = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Banner />
            <Grid />
            <Staff />
            <HS />
            <Grid2 />
            <Footer />  
        </>   
    )
}

export default About;
