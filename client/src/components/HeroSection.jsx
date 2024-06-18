import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <header
      className="h-screen w-full flex flex-col items-center justify-center bg-[url(./assets/images/heroBg.webp)]  
      bg-no-repeat bg-[30%] bg-cover bg-clip-border gap-2 lg:grid lg:grid-cols-[repeat(2,minmax(0,1fr)),1.5fr] 
      lg:grid-rows-[repeat(3,minmax(0,auto))] py-48 lg:pr-8"
    >
      <h1 className="w-full text-[var(--lightColor)] text-center text-5xl md:text-6xl lg:col-[3/4] lg:text-left lg:place-self-end">
        Votre sport en Streaming
      </h1>
      <p className="w-full text-[var(--lightColor)] text-center text-lg md:text-xl lg:text-2xl lg:col-[3/4] lg:text-left lg:place-self-center">
        La solution pour du sport à la maison
      </p>
      <Link
        to="/register"
        className="text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] p-2 rounded-xl flex item-center 
          justify-center gap-2 mt-2 visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] md:p-3 lg:p-4 lg:col-[3/4] lg:text-3xl lg:place-self-start"
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="w-5 h-5 m-auto md:w-6 md:h-6 lg:h-8 lg:w-8"
        />
        Commencer
      </Link>
    </header>
  );
}
