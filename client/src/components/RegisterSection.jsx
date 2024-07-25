import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";

export default function RegisterSection({ video }) {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const { isLogged } = useContext(LoggedContext);

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  return (
    <article className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-0 lg:my-40 lg:mx-20">
      <img
        id="WhySubscribe"
        ref={inViewRef}
        src={
          isLogged && video
            ? `http://localhost:3310/assets/images/${video.img_url}`
            : "./src/assets/images/musculation.jpg"
        }
        alt={isLogged && video ? video.title : ""}
        className={`img-shadow w-[calc(90%-15px)] object-cover h-auto rounded-xl lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:place-self-center ${fadeInClass}`}
      />
      <h2
        ref={inViewRef}
        className={`text-center mt-8 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2 lg:place-self-start  ${fadeInClass}`}
      >
        {isLogged ? "Cours du moment" : "Pourquoi s'abonner ?"}
      </h2>
      <p
        ref={inViewRef}
        className={`mt-2 text-center lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2 lg:place-self-start lg:text-left ${fadeInClass}`}
      >
        {isLogged && video
          ? video.description
          : "Conçue pour répondre aux besoins des amateurs de fitness comme des athlètes chevronnés, accédez aux meilleurs cours en ligne pour atteindre vos objectifs."}
      </p>
      <Link
        to={isLogged && video ? `/video/${video.video_id}` : "/register"}
        ref={inViewRef}
        className={`text-light-color text-xl bg-primary-color p-2 visited:text-light-color
            hover:bg-primary-dark rounded-xl flex items-center mt-5 mb-14 w-40 md:text-left lg:mb-0 lg:mt-0 lg:w-56 lg:text-2xl 
            gap-3 lg:gap-6 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:place-self-start ${fadeInClass} whitespace-nowrap`}
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        />
        {isLogged && video ? "Voir la vidéo" : "S'inscrire"}
      </Link>
    </article>
  );
}

RegisterSection.propTypes = {
  video: PropTypes.shape({
    img_url: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    video_id: PropTypes.number,
  }),
};

RegisterSection.defaultProps = {
  video: null,
};