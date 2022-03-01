import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/Author/Banner';
import Footer from '../components/Principal/Footer';

const Author = () => {
    return (
        <div id="author">
            <TopBar />
            <Header />
            <Banner />
            <Footer />  
        </div>  
    )
}

export default Author;
