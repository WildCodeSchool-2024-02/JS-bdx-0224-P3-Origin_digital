export default function registerSection() {
  return (
    <section
      className="w-full grid grid-cols-1 grid-rows-[1fr/auto] items-center gap-2 justify-center 
      md:grid-rows-1 md:grid-cols-2 md:gap-8 py-8 md:py-16 md:items-start lg:gap-16 "
    >
      <img
        src="./src/assets/images/crossfit.webp"
        alt="une femme faisant du crossfit"
        className="img-shadow h-72 row-[1/2] w-[calc(100%-15px)] rounded-xl max-w-[450px] justify-self-center md:col-[2/3]"
      />
      <div className="flex flex-col items-center gap-2 py-6 md:items-start md:col-[1/2] md:row-[1/2]">
        <h2 className="w-full text-center md:text-left">L'offre</h2>
        <p className="w-full text-center md:text-left">
          Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à
          ton niveau (intensité, zones du corps...) Ton rythme (fréquence &
          durée) Et ton équipement (avec ou sans matériel)
        </p>
      </div>
    </section>
  );
}
