import React from "react";
import "./styles/hero.css";

const Hero = ({ imageUrl, altText }) => {
  return (
    <div className="hero">
      <img className="hero-img" src={imageUrl} alt={altText || "image"} />
    </div>
  );
};

export default Hero;
