import Slider from "./Slider";

import image1 from "../assets/images/musculation.jpg";
import image2 from "../assets/images/yoga.jpg";
import image3 from "../assets/images/nutrition.jpg";
import image4 from "../assets/images/pilat.jpg";
import image5 from "../assets/images/training.jpg";

const sportList = [
  {
    id: 1,
    imgSrc: image1,
    name: "Fitness",
  },
  {
    id: 2,
    imgSrc: image2,
    name: "Musculation",
  },
  {
    id: 3,
    imgSrc: image3,
    name: "Pilates",
  },
  {
    id: 4,
    imgSrc: image4,
    name: "Yoga",
  },
  {
    id: 5,
    imgSrc: image5,
    name: "Nutrition",
  },
];

function SliderCategory() {
  return <Slider sportList={sportList} resource="category" />;
}

export default SliderCategory;
