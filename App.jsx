import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";

import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <span className="logo-text">UG</span>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
