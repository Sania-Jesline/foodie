import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="quote">“Food is the ingredient that binds us together.”</h1>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
