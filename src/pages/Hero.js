import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/Become-A-Hero/Banner';
import Footer from '../components/Principal/Footer';

const Hero = () => {
  return (
    <div id="become-a-hero">
            <TopBar />
            <Header />
            <Banner />
            <Footer />   
    </div>  
  )
}

export default Hero;