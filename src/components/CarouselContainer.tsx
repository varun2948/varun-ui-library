import { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const slides = [
  { key: 1, content: "1" },
  { key: 2, content: "2" },
  { key: 3, content: "2" },
  { key: 4, content: "3" },
  { key: 5, content: "4" },
  { key: 6, content: "5" },
  { key: 7, content: "6" },
  { key: 8, content: "7" },
];

const CarouselContainer = () => {
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(true);
  const [animationConfig] = useState(config.gentle);

  return (
    <div className="card-container">
      <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default CarouselContainer;
