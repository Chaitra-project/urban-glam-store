import React from "react";
import Shop from "./shop";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="hero">
        <h1 className="logo">Urban Glam</h1>
        <p className="tagline">Elegant. Handcrafted. You.</p>
        <Link className="cta-button" to="/shop">
          Shop Now
        </Link>
      </header>

      <section className="featured">
        <h2>Featured Collections</h2>
        <div className="product-grid">
          <div className="product-card">Rings</div>
          <div className="product-card">Necklaces</div>
          <div className="product-card">Earrings</div>
        </div>
      </section>

      <section className="about">
        <h2>Our Story</h2>
        <p>
          At Urban Glam, we craft cute and elegant jewelry for the dreamers and
          romantics. Every piece is made to sparkle with your unique style.
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Urban Glam Store. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;
