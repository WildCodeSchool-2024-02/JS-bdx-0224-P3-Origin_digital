import { Link } from "react-router-dom";

export default function registerSection() {
  return (
    <section
      className="w-full grid grid-cols-1 grid-rows-[1fr/auto] items-center justify-center pt-16 gap-2 pb-8 md:pt24 md:grid-rows-1 
       md:gap-8 md:grid-cols-2 md:pb-16 md:items-start lg:gap-16"
    >
      <img
        src="./src/assets/images/runner.webp"
        alt="un coureur"
        className="img-shadow h-72 row-[1/2] w-[calc(100%-15px)] max-w-[450px] justify-self-center rounded-xl md:col-[1/2]"
      />
      <div className="flex flex-col items-center gap-2 py-6 md:items-start md:col-[2/3] md:row-[1/2]">
        <h2 className="w-full text-center md:text-left">
          Pourquoi s'abonner ?
        </h2>
        <p className="w-full text-center md:text-left">Les avantages...</p>
        <Link
          to="/register"
          className="text-[var(--lightColor)] text-xl bg-[var(--primaryColor)] p-2 text-center visited:text-[var(--lightColor)] md:p-3 
        hover:bg-[var(--primaryDark)]lg:p-4 
          rounded-xl flex item-center justify-center gap-2 mt-2 w-40 md:w-48 md:text-left lg:w-56 lg:text-2xl"
        >
          <img
            src="./src/assets/images/logoPlay.png"
            alt=""
            className="w-5 h-5 m-auto md:w-6 md:h-6 lg:w-8 lg:h-8"
          />
          Commencer
        </Link>
      </div>
    </section>
  );
}
