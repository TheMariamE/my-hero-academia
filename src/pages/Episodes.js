import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/Episodes/Banner';
import Seasons from '../components/Episodes/Seasons';
import Footer from '../components/Principal/Footer';

const Episodes = () => {
    return (
        <div id="episodes">
            <TopBar />
            <Header />
            <Banner />
            <Seasons />
            <Footer />  
        </div> 
    )
}

export default Episodes;
