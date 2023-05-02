import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './pages/Projects';
import Aboutme from './pages/AboutMe';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div>
    <Nav />
    <HomePage />
    <Projects />
    <Aboutme />
    <Footer />
    <Routes>
      <Route path="/aboutme" element={<Aboutme />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>

    </div>
  );
}