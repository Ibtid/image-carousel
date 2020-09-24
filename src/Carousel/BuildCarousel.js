import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card/Card";
const BuildCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={4000}
      >
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
