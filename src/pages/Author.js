import React from 'react';
import TopBar from "../components/Principal/TopBar";
import Header from "../components/Principal/Header";
import Banner from '../components/Author/Banner';
import KHGrid from '../components/Author/KHGrid';
import KH from '../components/Author/KH';
import KHGrid2 from '../components/Author/KHGrid2';
import SO from '../components/Author/SO';
import Footer from '../components/Principal/Footer';

const Author = () => {
    return (
        <div id="author">
            <TopBar />
            <Header />
            <Banner />
            <KHGrid />
            <KH />
            <KHGrid2 />
            <SO />
            <Footer />  
        </div>  
    )
}

export default Author;
