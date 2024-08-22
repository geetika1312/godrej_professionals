import { NextArrow, PrevArrow } from "./CustomArrows"; // Make sure to adjust the import path as necessary

import React from "react";
import "./App.css";
import { CiSearch } from "react-icons/ci";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import explore1 from "./assets/explore1.jpeg";
import explore2 from "./assets/explore2.jpeg";
import explore3 from "./assets/explore3.jpeg";

import one from "./assets/one.jpeg";
import two from "./assets/two.jpeg";
import three from "./assets/three.jpeg";
import four from "./assets/four.jpeg";
import five from "./assets/five.jpeg";
import six from "./assets/six.jpg";

function App() {
  const exploreImages = [explore1, explore2, explore3];
  const rightImages = [one, two, three, four, five, six];

  const exploreSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const rightSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two cards at a time on larger screens
    slidesToScroll: 2, // Scroll two cards at a time
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 600, // At 600px width and below
        settings: {
          slidesToShow: 1, // Display one card at a time on phones
          slidesToScroll: 1, // Scroll one card at a time
        },
      },
    ],
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img
            src="https://mma.prnewswire.com/media/1536370/Godrej_Professional_Logo.jpg?p=facebook"
            alt="Godrej Professional Logo"
            className="logo-image"
          />

          <nav className="header__nav">
            <a href="/hair-color">HAIR COLOR</a>
            <a href="/contact-us">CONTACT US</a>
            <span> | </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <CiSearch />
          </nav>
          <div className="header__actions">
            <h1>The Hair Care</h1>
            <p>
              Indulge In Our Exclusive Offer & Reignite Your Love Affair With
              Your Locks.
            </p>
          </div>
        </div>
      </header>
      <div className="Images">
        <div className="explore">
          <Slider {...exploreSliderSettings}>
            {exploreImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Explore Slide ${index}`} className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="right">
          <Slider {...rightSliderSettings}>
            {rightImages.map((image, index) => (
              <div key={index} className="card">
                <img src={image} alt={`Right Slide ${index}`} className="card-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
