import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TarotReading from "./components/TarotReading";
import Zodiac from "./components/Zodiac";
import HamburgerMenu from "./components/HamburgerMenu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <HamburgerMenu />

      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tarot" className="nav-link">
              Tarot Reading
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/zodiac" className="nav-link">
              Zodiac
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tarot" element={<TarotReading />} />
        <Route path="/zodiac" element={<Zodiac />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
