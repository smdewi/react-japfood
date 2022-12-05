// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <React.Fragment>
      <div className="App">
        <Nav />
        <Hero />
        <AboutUs />
    </div>
    </React.Fragment>
    
  );
}

export default App;
