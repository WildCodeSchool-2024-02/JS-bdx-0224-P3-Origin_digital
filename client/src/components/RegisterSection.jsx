import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";

export default function RegisterSection() {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const { isLogged } = useContext(LoggedContext);

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
  }`;

  return (
    <>
      <img
        ref={inViewRef}
        src="./src/assets/images/musculation.jpg"
        alt=""
        className={`img-shadow w-[calc(90%-15px)] h-auto mx-auto max-w-[450px] rounded-xl lg:mr-[10vw] mt-[3rem] lg:mb-[3rem] ${fadeInClass}`}
      />{" "}
     <h2
    id="WhySubscribe"
    ref={inViewRef}
    className={`text-center max-w-5xl lg:text-left place-self-end lg:relative lg:ml-[10vw] lg:top-[-35vh]  ${fadeInClass}`}
>

        {isLogged ? "Cours du moment" : "Pourquoi s'abonner ?"}
      </h2>
      <p
        ref={inViewRef}
        className={`text-center max-w-xl lg:text-left  lg:relative lg:ml-[10vw] lg:top-[-35vh] lg:p-0 ${fadeInClass}`}
      >
        {isLogged
          ? "**Titre de la vidéo**"
          : "Conçue pour répondre aux besoins des amateurs de fitness comme des athlètes chevronnés, accédez aux meilleurs cours en ligne pour atteindre vos objectifs."}
      </p>
      <Link
        to={isLogged ? "/category/1" : "/register"}
        ref={inViewRef}
        className={`text-[var(--lightColor)] text-xl bg-[var(--primaryColor)] p-2 text-center visited:text-[var(--lightColor)] 
            hover:bg-[var(--primaryDark)] rounded-xl flex items-center justify-center mx-auto mt-5 mb-10 w-40 md:text-left lg:p-4 lg:w-56 lg:text-2xl 
            lg:gap-6 lg:mb-0 lg:mr-[70vw] lg:relative lg:top-[-33vh] ${fadeInClass} whitespace-nowrap`}
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        />
        {isLogged ? "Les vidéos" : "S'inscrire"}
      </Link>
    </>
  );
}
