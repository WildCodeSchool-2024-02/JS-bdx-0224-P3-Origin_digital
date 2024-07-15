import { Link } from "react-router-dom";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";

export default function HeroSection() {
  const { isLogged, userData } = useContext(LoggedContext);

  return (
    <>
      <h1
        className="z-10 w-full text-[var(--lightColor)] text-5xl bg-[url(./assets/images/banner.jpg)] 
      bg-no-repeat bg-[30%] bg-cover bg-clip-border h-dvh text-center md:text-6xl lg:text-left lg:pl-[55%] pt-[20%] lg:pt-[10%] drop-shadow-2xl"
      >
        {isLogged ? (
          `Votre sport en Streaming, ${userData.firstname}`
        ) : (
          "Découvrez le sport en Streaming"
        )}
      </h1>
      <p
        className="w-full text-[var(--lightColor)] lg:pl-[55%] text-lg text-center lg:text-left lg:text-2xl relative 
      top-[-64vh] drop-shadow-2xl md:text-xl lg:top-[-60vh]"
      >
        {isLogged ? (
          `Bienvenue, ${userData.firstname} ! Profitez de nos services.`
        ) : (
          "La solution pour du sport à la maison"
        )}
      </p>
      {!isLogged && (
        <Link
          to="/register"
          className="flex gap-6 p-2 text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] items-center rounded-xl 
        visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] mx-[auto] w-[16ch] relative text-center top-[-50vh] lg:text-3xl
        lg:top-[-50vh] lg:ml-[55%]"
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="block w-7 h-7 md:w-6 md:h-6 lg:h-8 lg:w-8"
          />
          Commencer
        </Link>
      )}
    </>
  );
}
