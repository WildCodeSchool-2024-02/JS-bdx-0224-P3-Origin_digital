import { Link } from "react-router-dom";

export default function registerSection() {
  return (
    <section
      className="w-full grid grid-cols-1 grid-rows-[1fr/auto/auto/auto] items-center justify-center pt-16 gap-4 pb-8
       md:grid-rows-[auto/auto/auto] md:pt24 md:gap-x-8 md:grid-cols-2 md:pb-16 md:items-start lg:gap-x-16"
    >
      <img
        src="./src/assets/images/runner.webp"
        alt="un coureur"
        className="img-shadow h-72 col-[1/2] row-[1/2] w-[calc(100%-15px)] max-w-[450px] justify-self-center rounded-xl md:row-span-3"
      />
      <h2 className="w-full text-center md:text-left row-[2/3] place-self-end mt-4 md:col-[2/3] md:row-[1/2]">
        Pourquoi s'abonner ?
      </h2>
      <p className="w-full text-center row-[3/4] md:row-[2/3] md:col-[2/3] md:text-left">
        Les avantages...
      </p>
      <Link
        to="/register"
        className="text-[var(--lightColor)] text-xl bg-[var(--primaryColor)] p-2 text-center row-[4/5] justify-self-center visited:text-[var(--lightColor)] 
        hover:bg-[var(--primaryDark)] rounded-xl flex item-center justify-center gap-2 mt-2 w-40 md:justify-self-start
        md:row-[3/4] md:col-[2/3] md:p-3  md:w-48 md:text-left lg:p-4 lg:w-56 lg:text-2xl"
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="w-5 h-5 m-auto md:w-6 md:h-6 lg:w-8 lg:h-8"
        />
        Commencer
      </Link>
    </section>
  );
}
