import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './pages/Projects';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
    <Nav />
    <div className="homepage-container">
    <HomePage />
    <div id="projects-section">
      <Projects />
    </div>
    <Footer />
  </div>
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>

    </div>
  );
}