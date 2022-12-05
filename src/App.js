// import logo from './logo.svg';
import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav>
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#">Our Menu</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
  )
}

function Hero() {
  return (
    <section id="hero">
        <div id="cta">
          <a href="#">
            Make a Booking
          </a>
        </div>
      </section>
  )
}

function AboutUs() {
  return (
    <section id="about-us">
        <div class="content">
          <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
        </div>
      </section>
  )
}

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
