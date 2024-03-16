// Suíte Jatobá
import jt1 from "../../assets/rooms/jatoba/1.jpg";
import jt2 from "../../assets/rooms/jatoba/2.jpg";
import jt3 from "../../assets/rooms/jatoba/3.jpg";
import jt4 from "../../assets/rooms/jatoba/4.jpg";
import jt5 from "../../assets/rooms/jatoba/5.jpg";
import Carousel from "./Carousel";

const PresentationImages = () => {
  const images = [jt1, jt2, jt3, jt4, jt5];

  return <Carousel images={images} styles={{borderRadius: "0", containerWidth: "100%", imageHeight: "100vh"}} />;
};

export default PresentationImages;
