"use client"

// Suíte Jatobá
import p1 from "../../assets/presentation/p1.jpg"
import p2 from "../../assets/presentation/p2.jpg"
import p3 from "../../assets/presentation/p3.jpg"
import p4 from "../../assets/presentation/p4.png"
import p5 from "../../assets/presentation/p5.jpg"

import Carousel from "../Carousel";


const ShowcaseImages = () => {
  const images = [p1, p2, p3, p4, p5];

  return (
    <div>
      <Carousel
        images={images}
        styles={{ borderRadius: "0", fullScreen: true, imageHeight: "100vh" }}
      />
    </div>
  );
};

export default ShowcaseImages;
