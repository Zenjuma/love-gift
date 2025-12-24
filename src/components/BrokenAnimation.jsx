import Lottie from "lottie-react";
import brokenAnimation from "/public/assets/Broken.json";

function BrokenAnimation() {
  return (
    <Lottie
      animationData={brokenAnimation}
      loop={true}
      autoplay={true}
      style={{ width: 170, height: 170 }}
    />
  );
}

export default BrokenAnimation;
