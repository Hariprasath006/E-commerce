import React from "react";

function HeroBanner() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>
          Freshness You Can Trust,
          <br />
          Savings You Will Love!
        </h1>

        <button className="shop-btn">Shop Now</button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e"
        alt="groceries"
      />
    </div>
  );
}

export default HeroBanner;