/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
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

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      loop
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {sportList.map((sport) => (
        <SwiperSlide key={sport.name}>
          <Link to="/category">
            <img
              src={sport.imgSrc}
              alt={sport.name}
              className="img-shadow w-[calc(100%-15px)] mr-auto rounded-xl mb-4 h-60 object-cover"
            />
          </Link>
          <p className="flex justify-center items-center font-bold">
            {sport.name}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
