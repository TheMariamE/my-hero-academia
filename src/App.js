import './App.css';
import './app.scss';
// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Episodes from './pages/Episodes';
import Author from './pages/Author';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// Import Swiper styles
import '../node_modules/swiper/swiper.min.css'
import '../node_modules/swiper/modules/pagination/pagination.min.css'
import '../node_modules/swiper/modules/navigation/navigation.min.css'

class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 1000));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/author" component={Author} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/become-a-hero" component={Hero} />
        </>
      </Router>
    );
  }
}

export default App;
