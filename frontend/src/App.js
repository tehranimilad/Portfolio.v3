import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './pages/Projects';
import ReactGA from 'react-ga';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";

const TRACKING_ID = "UA-256469666-1";
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <>
    <div>
    <Nav />
      <div className="homepage-container">
       <div id="about-me">
    <HomePage />
    </div>
          <div id="projects-section">
          <Projects />
          </div>
            <div id="connect-with-me">
    <Footer />
          </div>
           </div>
    </div>
    </>
  );
}