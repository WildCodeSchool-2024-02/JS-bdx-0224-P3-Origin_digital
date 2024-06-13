import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function HomeSection({ reversed }) {
  return (
    <section
      className={`w-full flex flex-col items-center justify-center gap-2 ${reversed ? "md:items-end" : "md:items-start"}`}
    >
      <div className="w-full flex flex-col items-center justify-center md:w-1/2 lg:w-[40%] xl: md:items-start gap-2 md:gap-3 lg:gap-4">
        <img
          src={`${reversed ? "./src/assets/images/crossfit.webp" : "./src/assets/images/runner.webp"}`}
          alt="un coureur"
          className="img-shadow h-72 w-[calc(100%-15px)] rounded-xl"
        />
        <h2 className="w-full text-center md:text-left">
          Votre sport en Streaming
        </h2>
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
  reversed: PropTypes.bool.isRequired,
};
