import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      <h1 className="w-full text-[var(--lightColor)] text-5xl md:text-6xl bg-[url(./assets/images/heroBg.webp)] bg-no-repeat bg-[30%] bg-cover bg-clip-border h-dvh text-center lg:text-left lg:pl-[55%] pt-[20%] lg:pt-[10%] drop-shadow-2xl">
        Votre sport en Streaming
      </h1>
      <p className="w-full text-[var(--lightColor)] lg:pl-[55%] text-lg md:text-xl text-center lg:text-left lg:text-2xl relative top-[-64vh] drop-shadow-2xl lg:top-[-60vh]">
        La solution pour du sport à la maison
      </p>
      <Link
        to="/register"
        className="flex gap-6 p-2 text-[var(--lightColor)] text-2xl bg-[var(--primaryLight)] items-center rounded-xl visited:text-[var(--lightColor)] hover:bg-[var(--primaryDark)] mx-[auto] w-[16ch] lg:text-3xl relative text-center top-[-50vh] lg:top-[-50vh] lg:ml-[55%]"
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="block w-7 h-7  md:w-6 md:h-6 lg:h-8 lg:w-8 "
        />
        Commencer
      </Link>
    </>
  );
}
