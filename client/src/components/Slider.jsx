/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Slider({
  resourceList,
  resourcePath,
  isUserSubscribed,
}) {
  return (
    <Swiper
      spaceBetween={30}
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
      {resourceList.map((resource) => (
        <SwiperSlide key={resource.id}>
          <Link
            to={
              (resource.access === "subscription" &&
                isUserSubscribed &&
                `/${resourcePath}/${resource.id}`) ||
              (resource.access !== "subscription" &&
                `/${resourcePath}/${resource.id}`) ||
              (resource.access === "subscription" && !isUserSubscribed && null)
            }
            className="flex flex-col text-center text-dark-color"
          >
            <img
              src={resource.image}
              alt={resource.name}
              className="img-shadow  w-[calc(100%-15px)] mr-auto rounded-xl mb-4 h-60 object-cover"
            />
            {resource.title}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  resourceList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  resourcePath: PropTypes.string.isRequired,
  isUserSubscribed: PropTypes.bool.isRequired,
};
