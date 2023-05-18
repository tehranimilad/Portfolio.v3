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
    <Projects />
    <Footer />
    <Routes>
      <Route path="/projects" element={<Projects />} />
    </Routes>

    </div>
    </div>
  );
}