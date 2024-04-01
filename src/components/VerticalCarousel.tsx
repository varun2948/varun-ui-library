import { useState, useEffect } from "react";
import Slide from "./Slide";

function mod(a, b) {
  return ((a % b) + b) % b;
}

const VerticalCarousel = ({
  slides,
  offsetRadius = 2,
  animationConfig = { tension: 120, friction: 14 },
}: any): any => {
  const [index, setIndex] = useState(0);

  const modBySlidesLength = (index) => mod(index, slides.length);

  const moveSlide = (direction) =>
    setIndex(modBySlidesLength(index + direction));

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);
    return Math.min(Math.max(offsetRadius, 0), upperBound);
  };

  const getPresentableSlides = () =>
    Array.from(
      { length: 2 * clampOffsetRadius(offsetRadius) + 1 },
      (_, i) => slides[modBySlidesLength(index - offsetRadius + i)]
    );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!event.isComposing && event.keyCode === 38) moveSlide(-1);
      if (!event.isComposing && event.keyCode === 40) moveSlide(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return (
    <div>
      {getPresentableSlides().map((slide, presentableIndex) => (
        <Slide
          key={slide.key}
          moveSlide={moveSlide}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={presentableIndex}
          animationConfig={animationConfig}
        />
      ))}
    </div>
  );
};

export default VerticalCarousel;
