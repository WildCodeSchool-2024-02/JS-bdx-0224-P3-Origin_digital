import Slider from "./Slider"

import image1 from "../assets/images/musculation.jpg";
import image2 from "../assets/images/yoga.jpg";
import image3 from "../assets/images/nutrition.jpg";
import image4 from "../assets/images/pilat.jpg";
import image5 from "../assets/images/training.jpg";

const sportList = [
  {
    imgSrc: image1,
    name: "Musculation",
  },
  {
    imgSrc: image2,
    name: "Yoga",
  },
  {
    imgSrc: image3,
    name: "Nutrition",
  },
  {
    imgSrc: image4,
    name: "Pilates",
  },
  {
    imgSrc: image5,
    name: "Fitness",
  },
];

function SliderCategory() {
  return <Slider 
  sportList={sportList}
  />
}

export default SliderCategory