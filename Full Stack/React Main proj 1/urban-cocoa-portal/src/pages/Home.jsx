import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./cards/Card";


const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="hero">
          <h1>Welcome to Urban Cocoa</h1>
          <p>Your one-stop portal for premium cocoa products.</p>
          <Link to="/products" className="btn">Explore Products</Link>
        </div>
      </div>
      <div>
        <Card
        image="https://images.pexels.com/photos/10353326/pexels-photo-10353326.jpeg"
        paragraph="A beautiful sunset paints the sky with rich colors, reminding us that endings can be beautiful too."
      />
      </div>
    </div>
    
  );
};

export default Home;
