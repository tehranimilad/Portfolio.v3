import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <div>
    <Nav />
    <div className="homepage-container">
    <div id="about-me">
    <HomePage />
    </div>
    <div id="projects-section">
      {/* <Projects /> */}
    </div>
    {/* <Footer /> */}
  </div>

    </div>
  );
}