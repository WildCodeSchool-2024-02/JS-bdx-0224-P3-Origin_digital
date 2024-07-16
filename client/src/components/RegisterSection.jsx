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
        src="./src/assets/images/yoga.jpg"
        alt=""
        className={`img-shadow w-[calc(90%-15px)] h-auto mx-auto max-w-[450px] rounded-xl lg:ml-[10vw] mt-10 ${fadeInClass}`}
      />{" "}
        <h2
          id="WhySubscribe"
          ref={inViewRef}
          className={`text-center lg:text-left place-self-end mt-10 lg:relative lg:top-[-40vh] lg:ml-[60vw] ${fadeInClass}`}
        >
          {isLogged ? "Bravo pour votre détermination !" : "Pourquoi s'abonner ?"}
        </h2>

        <p
          ref={inViewRef}
          className={`text-center max-w-sm lg:text-left my-5 px-5 lg:relative lg:top-[-40vh] lg:ml-[60vw] lg:p-0 ${fadeInClass}`}
        >
            {isLogged ? "L'équipe SweatStream vous félicite pour votre assiduité sur la plateforme" : "Conçue pour répondre aux besoins des amateurs de fitness comme des athlètes chevronnés, accédez aux meilleurs cours en ligne pour atteindre vos objectifs."}

        </p>
        <Link
          to="/register"
          ref={inViewRef}
          className={`text-[var(--lightColor)] text-xl bg-[var(--primaryColor)] p-2 text-center visited:text-[var(--lightColor)] 
            hover:bg-[var(--primaryDark)] rounded-xl flex items-center justify-center mx-auto mb-10 w-40 md:text-left lg:p-4 lg:w-56 lg:text-2xl 
            lg:gap-6 lg:ml-[60vw] lg:mt-8 lg:relative lg:top-[-40vh] ${fadeInClass} whitespace-nowrap`}
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
          />
           {isLogged ? "Mon espace" : "Commencer"}
        </Link>
    </>
  );
}
