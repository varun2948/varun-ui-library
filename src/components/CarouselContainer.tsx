import { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import { config } from "react-spring";

const CarouselContainer = ({ slides }) => {
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
