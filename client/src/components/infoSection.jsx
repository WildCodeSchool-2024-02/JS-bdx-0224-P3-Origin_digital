export default function registerSection() {
  return (
    <section
      className="grid grid-cols-1 grid-rows-[1fr/auto/auto] items-center justify-center pt-16 gap-4 pb-8
      md:grid-rows-[auto/auto/auto] md:pt24 md:gap-x-8 md:grid-cols-2 md:pb-16 md:items-start lg:gap-x-16"
    >
      <img
        src="./src/assets/images/crossfit.webp"
        alt="une femme qui fait du crossfit"
        className="img-shadow h-72 col-[1/2] row-[1/2] w-[calc(100%-15px)] max-w-[450px] justify-self-center rounded-xl md:col-[2/3] md:row-span-3"
      />
      <h2 className="w-full text-center md:text-left row-[2/3] place-self-end mt-4 md:col-[1/2] md:row-[1/2]">
        L'offre
      </h2>
      <p className="w-full text-center row-[3/4] md:row-[2/3] md:col-[1/2] md:text-left">
        Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à ton
        niveau (intensité, zones du corps...) Ton rythme (fréquence & durée) Et
        ton équipement (avec ou sans matériel)
      </p>
    </section>
  );
}
