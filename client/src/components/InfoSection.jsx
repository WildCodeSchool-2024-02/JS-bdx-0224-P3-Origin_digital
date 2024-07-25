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
    <article className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:my-40 lg:mx-20'>
      <img
        ref={inViewRef}
        src="./src/assets/images/yoga.jpg"
        alt=""
        className={`img-shadow w-[calc(90%-15px)] h-auto rounded-xl lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 lg:place-self-center lg:mr-20
  ${fadeInClass}`}
      />{" "}
      <h2
        ref={inViewRef}
        className={`text-center mt-8 lg:col-start-2 lg:mt-20 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:place-self-start lg:ml-14 ${fadeInClass}`}
      >
        {isLogged ? "Félicitation" : "Notre offre"}
      </h2>
      <p
        ref={inViewRef}
        className={`text-center mb-10 mt-2 px-5 lg:mt-0 lg:px-0 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:place-self-start lg:text-left lg:ml-14 ${fadeInClass}`}
      >
        {isLogged
          ? "Vous vous donnez les moyens pour réussir. L'équipe SweatStream vous félicite pour votre assiduité sur la plateforme !"
          : "  Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à ton niveau (intensité, zones du corps...) Ton rythme (fréquence & durée) Et ton équipement (avec ou sans matériel)"}
      </p>
    </article>
  );
}

