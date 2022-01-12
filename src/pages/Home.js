import React from 'react';
import Header from "../components/Principal/Header";
import Banner from '../components/Home/Banner';
import Carousel from '../components/Home/Carousel';
import PlusUltra from '../components/Home/PlusUltra';
import Gallery from '../components/Home/Gallery';
import Footer from '../components/Principal/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Carousel />
            <PlusUltra />
            <Gallery />
            <Footer />            
        </div>
    )
}

export default Home;
