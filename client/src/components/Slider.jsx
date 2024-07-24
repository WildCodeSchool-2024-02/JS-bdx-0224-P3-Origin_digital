/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/slider.css";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import locker from "../assets/images/locker.png";
import LoggedContext from "../context/LoggedContext";

export default function Slider({ resourceList, resourcePath }) {
  const { isLogged } = useContext(LoggedContext);

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
              (resource.access === "true" &&
                isLogged &&
                `/${resourcePath}/${resource.id}`) ||
              (resource.access !== "true" &&
                `/${resourcePath}/${resource.id}`) ||
              (resource.access === "true" && !isLogged && null)
            }
            className="flex flex-col text-center text-dark-color"
          >
            <figure className=" relative group img-shadow w-[calc(100%-15px)] mr-auto rounded-xl  mb-4 h-60 object-cover">
              <img
                src={`http://localhost:3310/assets/images/${resource.image}`}
                alt={resource.name}
                className="w-full h-full rounded-xl object-cover"
              />
              {isLogged || resource.access === "free" ? (
                <figcaption
                  className="bg-gradient-custom text-light-color h-full w-full px-2 pb-2 absolute top-0 flex items-end justify-center opacity-0 
            transition-opacity duration-300 rounded-xl group-hover:opacity-100"
                >
                  {resource.description}
                </figcaption>
              ) : (
                <figcaption className="bg-gradient-light text-light-color h-full w-full px-2 pb-2 absolute top-0 flex items-center justify-center">
                  <img src={locker} alt="video verrouillée" />
                </figcaption>
              )}
            </figure>
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
};
