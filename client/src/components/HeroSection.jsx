import { Link } from "react-router-dom";
import { useContext } from "react";
// import { useInView } from 'react-intersection-observer';
import LoggedContext from "../context/LoggedContext";

export default function HeroSection() {
  const { isLogged, userData } = useContext(LoggedContext);
  // const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
  //   inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  // }`;

  const heroSectionButton = `flex gap-6 p-2 text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] items-center rounded-xl 
            visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] mx-[auto] w-[16ch] col-start-2 row-start-3 place-self-start lg:mx-0 lg:mt-20`;

  return (
    <article className="bg-[url(./assets/images/banner.jpg)] 
        bg-no-repeat bg-[30%] bg-cover bg-clip-border h-screen drop-shadow-lg h1-background-effect flex flex-col text-center pt-[25vh] gap-10 lg:gap-0 lg:gap-x-24 lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:pt-0 ">
      <h1
        // ref={inViewRef}
        className={`text-[var(--lightColor)] text-5xl md:text-5xl lg:text-left col-start-2 row-start-2 lg:mt-16
        `}
      >
        {isLogged ? `Bonjour, ${userData.firstname}` : "Découvrez le sport en Streaming"}
      </h1>
      <p
        // ref={inViewRef}
        className="text-[var(--lightColor)] text-xl text-center lg:text-left lg:text-2xl drop-shadow-2xl md:text-xl col-start-2 row-start-3"
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
                // ref={inViewRef}
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
              // ref={inViewRef}
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
            // ref={inViewRef}
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
    </article>
  );
}
