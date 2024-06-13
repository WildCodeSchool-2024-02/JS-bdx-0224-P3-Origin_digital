/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/images/cardio.webp";
import image2 from "../assets/images/bien_etre.webp";
import image3 from "../assets/images/mae_coach_fitness.webp";
import image4 from "../assets/images/minceur.webp";
import image5 from "../assets/images/prenatal.webp";

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
    name: "Pilat",
  },
  {
    imgSrc: image5,
    name: "Pilat",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      loop
      navigation
      pagination={{ clickable: true }}
    >
      {sportList.map((sport) => (
        <SwiperSlide key={sport.name}>
          <Link to="/category">
            <img
              src={sport.imgSrc}
              alt={sport.name}
              className="img-shadow w-[calc(100%-15px)] mr-auto rounded-xl mb-4"
            />
            <p className="flex justify-center items-center font-bold">
              {sport.name}
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
