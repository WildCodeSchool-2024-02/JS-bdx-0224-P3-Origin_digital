import { Link } from "react-router-dom";

export default function registerSection() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-1 items-center justify-center p gap-2 md:items-end">
      <img
        src="./src/assets/images/runner.webp"
        alt="un coureur"
        className="img-shadow h-72 row-[1/2] ~w-64/96 max-w-[calc(100%-15px)] rounded-xl md:col-[1/2]"
      />
      <div className="md:col-[1/2] row-[1/2] flex flex-col gap-2">
        <h2 className="w-full text-center md:text-left">
          Pourquoi s'abonner ?
        </h2>
        <p className="w-full text-center md:text-left">Les avantages...</p>
        <Link
          to="/register"
          className="text-[var(--lightColor)] text-xl lg:text-2xl visited:text-[var(--lightColor)] bg-[var(--primaryColor)] p-2 md:p-3 lg:p-4 
          rounded-xl flex item-center justify-center gap-2 mt-2 w-40 md:w-48 lg:w-56 text-center md:text-left hover:bg-[var(--primaryDark)]"
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
