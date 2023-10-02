import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
      <Routes>
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
      </Routes>
    </div>
  );
}