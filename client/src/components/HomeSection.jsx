import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function HomeSection({ alignItem, imgSrc, title }) {
  return (
    <section
      className={`w-full grid grid-cols-1 items-center justify-center p gap-2 ${alignItem}`}
    >
      <img
        src={imgSrc}
        alt="un coureur"
        className="img-shadow lg:row-[1/2] h-72 w-[calc(100%-15px)] rounded-xl"
      />
      <div className="lg:row-[1/2] flex flex-col gap-2">
        <h2 className="w-full text-center md:text-left">{title}</h2>
        <p className="w-full text-center md:text-left">Les avantages...</p>
        <Link
          to="/register"
          className="text-[var(--lightColor)] text-xl lg:text-2xl visited:text-[var(--lightColor)] bg-[var(--primaryColor)] p-2 md:p-3 lg:p-4 
          rounded-xl flex item-center justify-center gap-2 mt-2 w-40 md:w-48 lg:w-56 text-center md:text-left hover:bg-[var(--primaryDark)]"
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 m-auto"
          />
          Commencer
        </Link>
      </div>
    </section>
  );
}

HomeSection.propTypes = {
  alignItem: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
