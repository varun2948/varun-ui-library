import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import Card from "./Card/Card";

const Slide = ({
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
}: any) => {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));
  let translateY = -60;

  if (offsetRadius !== 0 && [0, totalPresentables - 1].includes(index)) {
    translateY = index === 0 ? 0 : -130;
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) moveSlide(-1);
    if (translateY < -100) moveSlide(1);
  }

  if (offsetFromMiddle !== 0) {
    translateY +=
      (offsetFromMiddle > 0 ? 60 : -60) *
      (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <div
          className="slide-container"
          style={{
            ...style,
            zIndex: Math.abs(offsetFromMiddle) - 2,
          }}
        >
          <div
            className="slide-card"
            onClick={() => moveSlide(offsetFromMiddle)}
          >
            <Card />
          </div>
        </div>
      )}
    </Spring>
  );
};

export default withGesture({})(Slide);
