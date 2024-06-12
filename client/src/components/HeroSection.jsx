import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="h-screen w-full flex flex-col items-center justify-center lg:items-end lg:pr-8 bg-[url(./assets/images/heroBg.webp)] 
    bg-no-repeat bg-[30%] bg-cover bg-clip-border gap-2 mb-24"
    >
      <div className="flex flex-col gap-2 justify-center items-center lg:items-start">
        <h1 className="text-[var(--lightColor)] text-center">
          Votre sport en Streaming
        </h1>
        <p className="text-[var(--lightColor)] text-center">
          La solution pour du sport à la maison
        </p>
        <Link
          to="/register"
          className="text-[var(--lightColor)] text-xl lg:text-2xl visited:text-[var(--lightColor)] bg-[var(--primaryLight)] p-2 md:p-3 lg:p-4 rounded-xl 
        flex item-center justify-center gap-2 mt-2 hover:bg-[var(--primaryDark)]"
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="w-5 h-5 md:w-6 lg:w-8 md:h-6 lg:h-8 m-auto"
          />
          Commencer
        </Link>
      </div>
    </section>
  );
}
