/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function SliderCategory({ categories, categoryImages }) {

  return (
    <Swiper
      spaceBetween={30}
      className="my-10 md:my-16 mb-24"
      loop
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="flex flex-col text-center text-dark-color"
          >
            <img
              src={categoryImages[category.id - 1]}
              alt={category.name}
              className=" h-full rounded-xl object-cover group img-shadow w-[calc(100%-15px)] mr-auto mb-4"
            />
            {category.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SliderCategory.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  categoryImages: PropTypes.arrayOf().isRequired,
};
