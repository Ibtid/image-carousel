import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card/Card";
const BuildCarousel = () => {
  return (
    <div>
      <Carousel>
        <Card number="1" />
        <Card number="2" />
        <Card number="3" />
        <Card number="4" />
        <Card number="5" />
        <Card number="6" />
      </Carousel>
    </div>
  );
};

export default BuildCarousel;
