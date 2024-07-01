import Slider from "./Slider";

import image1 from "../assets/images/musculation.jpg";
import image2 from "../assets/images/yoga.jpg";
import image3 from "../assets/images/nutrition.jpg";
import image4 from "../assets/images/pilat.jpg";
import image5 from "../assets/images/training.jpg";

const sportList = [
  {
    id: 1,
    image: image1,
    name: "Fitness",
  },
  {
    id: 2,
    image: image2,
    name: "Musculation",
  },
  {
    id: 3,
    image: image3,
    name: "Pilates",
  },
  {
    id: 4,
    image: image4,
    name: "Yoga",
  },
  {
    id: 5,
    image: image5,
    name: "Nutrition",
  },
];

function SliderCategory() {
  return <Slider resourceList={sportList} resourcePath="category" />;
}

export default SliderCategory;
