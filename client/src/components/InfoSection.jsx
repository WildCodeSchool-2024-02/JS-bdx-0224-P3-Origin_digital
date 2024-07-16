import { useInView } from 'react-intersection-observer';

export default function InfoSection() {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  }`;

  return (
    <>
      <img
        ref={inViewRef}
        src="./src/assets/images/musculation.jpg"
        alt=""
        className={`img-shadow h-72 w-[calc(90%-15px)] mx-auto max-w-[450px] justify-self-center rounded-xl lg:ml-[60vw] lg:mt-[-15%] ${fadeInClass}`}
      />
      <h2
        ref={inViewRef}
        className={`text-center lg:text-left place-self-end mt-10 lg:relative lg:top-[-40vh] lg:ml-[10vw] ${fadeInClass}`}
      >
        L'offre
      </h2>
      <p
        ref={inViewRef}
        className={`text-center lg:text-left my-5 px-5 lg:relative lg:top-[-40vh] lg:ml-[10vw] lg:w-[42vw] lg:p-0 lg:mb-[-10%] ${fadeInClass}`}
      >
        Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à ton
        niveau (intensité, zones du corps...) Ton rythme (fréquence & durée) Et
        ton équipement (avec ou sans matériel)
      </p>
    </>
  );
}
