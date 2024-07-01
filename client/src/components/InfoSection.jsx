export default function InfoSection() {
  return (
    <>
      <img
        src="./src/assets/images/musculation.jpg"
        alt=""
        className="img-shadow h-72 w-[calc(90%-15px)] h-auto mx-auto max-w-[450px] justify-self-center rounded-xl lg:ml-[60vw] lg:mt-[-15%]"
      />
      <h2 className="text-center lg:text-left place-self-end mt-10 lg:relative lg:top-[-40vh] lg:ml-[10vw]">
        L'offre
      </h2>
      <p className="text-center lg:text-left my-5 px-5 lg:relative lg:top-[-40vh] lg:ml-[10vw] lg:w-[42vw] lg:p-0 lg:mb-[-10%]">
        Des vidéos en temps réel rapides, fun et efficaces qui s’adaptent à ton
        niveau (intensité, zones du corps...) Ton rythme (fréquence & durée) Et
        ton équipement (avec ou sans matériel)
      </p>
    </>
  );
}
