import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/About/Banner';
import Grid from '../components/About/AUGrid';
import Staff from '../components/About/Staff';
import HS from '../components/About/HighSchool';
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
            <Footer />  
        </>   
    )
}

export default About;
