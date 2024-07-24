import { Link } from "react-router-dom";
import { useContext } from "react";
import { useInView } from 'react-intersection-observer';
import LoggedContext from "../context/LoggedContext";

export default function HeroSection() {
  const { isLogged, userData } = useContext(LoggedContext);
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  }`;

  const heroSectionButton = `flex gap-6 p-2 text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] items-center rounded-xl 
            visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] mx-[auto] w-[16ch] relative text-center top-[-52vh] lg:text-3xl
            lg:top-[-40vh] lg:ml-[55%] ${fadeInClass}`;

  return (
    <>
      <h1
        ref={inViewRef}
        className={` h-[91vh] text-[var(--lightColor)] text-5xl bg-[url(./assets/images/banner.jpg)] 
        bg-no-repeat bg-[30%] bg-cover bg-clip-border text-center md:text-6xl lg:text-left lg:pl-[55%] pt-[20%] lg:pt-[10%] drop-shadow-lg ${fadeInClass}
        h1-background-effect`}
      >
        {isLogged ? `Bonjour, ${userData.firstname}` : "Découvrez le sport en Streaming"}
      </h1>
      <p
        ref={inViewRef}
        className={`w-full text-[var(--lightColor)] lg:pl-[55%] text-xl text-center lg:text-left lg:text-2xl relative 
        top-[-60vh] drop-shadow-2xl md:text-xl lg:top-[-47vh] ${fadeInClass}`}
      >
        {(() => {
          if (isLogged) {
            if (userData.role_id === 3) {
              return "Accédez à vos outils via le tableau de bord";
            }
            return "Visionnez vos vidéos préferées";
          }
          return "La solution pour du sport à la maison";
        })()}
      </p>
      {(() => {
        if (isLogged) {
          if (userData.role_id === 3) {
            return (
              <Link
                ref={inViewRef}
                to="/dashboard"
                className={heroSectionButton}
              >
                <img
                  src="./src/assets/images/logoPlay.png"
                  alt=""
                  className="block w-7 h-7 md:w-6 md:h-6 lg:h-8 lg:w-8"
                />
                Mon espace
              </Link>
            );
          }
          return (
            <Link
              ref={inViewRef}
              to="/categories"
              className={heroSectionButton}
            >
              <img
                src="./src/assets/images/logoPlay.png"
                alt=""
                className="block w-7 h-7 md:w-6 md:h-6 lg:h-8 lg:w-8"
              />
              Catégories
            </Link>
          );
        }
        return (
          <Link
            ref={inViewRef}
            to="/register"
            className={heroSectionButton}
          >
            <img
              src="./src/assets/images/logoPlay.png"
              alt=""
              className="block w-7 h-7 md:w-6 md:h-6 lg:h-8 lg:w-8"
            />
            Commencer
          </Link>
        );
      })()}
    </>
  );
}
