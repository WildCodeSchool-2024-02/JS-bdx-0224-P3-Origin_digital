import { useInView } from 'react-intersection-observer';
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";

export default function InfoSection() {
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
        className={`img-shadow w-[calc(90%-15px)] h-auto mx-auto max-w-[450px] rounded-xl lg:ml-[8vw] lg:mt-[-10%]
  ${fadeInClass}`}
      />{" "}
      <h2
        ref={inViewRef}
        className={`text-center mt-8 lg:text-left place-self-end lg:relative lg:top-[-18vw] lg:ml-[79.5vw] lg:mt-[0rem]${fadeInClass}`}
      >
        {isLogged ? "Félicitation" : "Notre offre"}
      </h2>
      <p
        ref={inViewRef}
        className={`text-center mb-10 mt-2 lg:text-right px-5 lg:relative lg:top-[-26vw] md:mb-16 lg:ml-[40vw] lg:p-16 lg:whitespace-normal lg:max-w-2${fadeInClass}`}
      >
        {isLogged
          ? "Vous vous donnez les moyens pour réussir. L'équipe SweatStream vous félicite pour votre assiduité sur la plateforme !"
          : "  Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à ton niveau (intensité, zones du corps...) Ton rythme (fréquence & durée) Et ton équipement (avec ou sans matériel)"}
      </p>
    </>
  );
}

