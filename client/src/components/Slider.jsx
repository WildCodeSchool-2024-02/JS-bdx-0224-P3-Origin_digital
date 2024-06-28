/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


export default function Slider({ sportList }) {
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
    >
      {sportList.map((sport) => (
        <SwiperSlide key={sport.name}>
          <Link
            to="/category"
            className="flex flex-col text-center text-dark-color"
          >
            <img
              src={sport.imgSrc}
              alt={sport.name}
              className="img-shadow w-[calc(100%-15px)] mr-auto rounded-xl mb-4 h-60 object-cover"
            />
            {sport.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  sportList: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};