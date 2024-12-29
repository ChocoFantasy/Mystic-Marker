import React, { useState } from "react";
import "../../css/carousel.css";

const images = [
  "/images/storyintro1.jpg",
  "/images/storyintro2.jpg",
  "/images/storyintro3.jpg",
  "/images/storyintro4.jpg",
  "/images/storyintro5.jpg",
];

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const moveToSelected = (direction) => {
    if (direction === "next") {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const getClassName = (index) => {
    const relativeIndex = (index - selectedIndex + images.length) % images.length;

    if (relativeIndex === 0) return "selected";
    if (relativeIndex === 1) return "next";
    if (relativeIndex === 2) return "nextRightSecond";
    if (relativeIndex === images.length - 1) return "prev";
    if (relativeIndex === images.length - 2) return "prevLeftSecond";
    return relativeIndex > 2 ? "hideRight" : "hideLeft";
  };
  

  return (
    <div id="carousel-area">
      <div id="carousel">
        {images.map((src, index) => (
          <div className={getClassName(index)} key={index}>
            <div className="img-wrap">
            <img src={src} alt={`Carousel item ${index}`} />
          </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="icon-btn" onClick={() => moveToSelected("prev")}><img src="/images/arrow_L.svg" alt="prev" className='icon-img'/></button>
        <button className="icon-btn"onClick={() => moveToSelected("next")}><img src="/images/arrow_R.svg" alt="next" className='icon-img' /></button>
      </div>
    </div>
  );
};

export default Carousel;
