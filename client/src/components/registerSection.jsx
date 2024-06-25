import { Link } from "react-router-dom";

export default function registerSection() {
  return (
    <>
    {/* // <section
    //   className="w-full grid grid-cols-1 grid-rows-[1fr/auto/auto/auto] items-center justify-center pt-16 gap-4 pb-8
    //    md:grid-rows-[auto/auto/auto] md:pt24 md:gap-x-8 md:grid-cols-2 md:pb-16 md:items-start lg:gap-x-16"
    // > */}
      <img
        src="./src/assets/images/yoga.jpg"
        alt=""
        className="img-shadow h-72 w-[calc(90%-15px)] h-auto mx-auto max-w-[450px] rounded-xl lg:ml-[10vw] mt-10"
      />
      <h2 className="text-center lg:text-left place-self-end mt-10 lg:relative lg:top-[-40vh] lg:ml-[60vw]">
        Pourquoi s'abonner ?
      </h2>
      <p className="text-center lg:text-left my-5 px-5 lg:relative lg:top-[-40vh] lg:ml-[60vw] lg:p-0">
        Les avantages...
      </p>
      <Link
        to="/register"
        className="text-[var(--lightColor)] text-xl bg-[var(--primaryColor)] p-2 text-center visited:text-[var(--lightColor)] 
        hover:bg-[var(--primaryDark)] rounded-xl flex item-center justify-end mx-[auto] mb-10 w-40 md:text-left lg:p-4 lg:w-56 lg:text-2xl lg:gap-6 lg:ml-[60vw] lg:mt-8 lg:relative lg:top-[-40vh]"
      >
        <img
          src="./src/assets/images/logoPlay.png"
          alt=""
          className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
        />
        Commencer
      </Link>
      </>
  );
}
