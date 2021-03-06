import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/Contact/Banner';
import Footer from '../components/Principal/Footer';

const Contact = () => {
    return (
        <div id="contact">
            <TopBar />
            <Header />
            <Banner />
            <Footer /> 
        </div> 
    )
}

export default Contact;
