import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <header
      className="h-screen w-full flex flex-col items-center justify-center bg-[url(./assets/images/heroBg.webp)]  
      bg-no-repeat bg-[30%] bg-cover bg-clip-border gap-2 lg:items-end lg:pr-8"
    >
      <section className="w-auto flex flex-col gap-2 justify-center items-center lg:items-start">
        <h1 className="text-[var(--lightColor)] text-center text-5xl md:text-6xl">
          Votre sport en Streaming
        </h1>
        <p className="text-[var(--lightColor)] text-center text-lg md:text-xl lg:text-2xl">
          La solution pour du sport à la maison
        </p>
        <Link
          to="/register"
          className="text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] p-2 rounded-xl flex item-center 
          justify-center gap-2 mt-2 visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] md:p-3 lg:p-4 lg:text-3xl"
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="w-5 h-5 m-auto md:w-6 md:h-6 lg:h-8 lg:w-8"
          />
          Commencer
        </Link>
      </section>
    </header>
  );
}
