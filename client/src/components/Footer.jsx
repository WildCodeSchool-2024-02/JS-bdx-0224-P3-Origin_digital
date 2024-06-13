export default function Footer() {
  return (
    <footer className="bg-[var(--primaryColor)] p-4 lg:flex lg:p-10 " >
      <h2 className="italic font-extrabold uppercase">Sweet Stream</h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-6 lg:grow lg:justify-evenly lg:leading-10">
        <li className="grow lg:grow-0">
          <h3>Pages</h3>
          <ul>
            <li>Accueil</li>
            <li>Pourquoi s'abonner</li>
            <li>Inscription utilisateur</li>
            <li>Inscription coach</li>
            <li>Connexion</li>
          </ul>
        </li>
        <li className="grow lg:grow-0">
          <ul>
            <h3>Catégories</h3>
            <li>Musculation</li>
            <li>Pilate</li>
            <li>Yoga</li>
            <li>Fitness</li>
            <li>Nutrition</li>
          </ul>
        </li>
        <li className="grow lg:grow-0">
          <h3>Réseaux</h3>
          <ul className="flex justify-between items-start lg:block m-0">
            <li>Contact</li>
            <li className="m-0">
              <section className="pt-0 lg:px-0">
                <ul className="flex justify-around lg:justify-start">
                  <li className="m-0">
                    <img
                      src="src/assets/images/icons8-facebook-100.png"
                      alt="" className="w-10"
                    />
                  </li>
                  <li>
                    <img
                      src="src/assets/images/icons8-instagram-100.png"
                      alt="" className="w-10"
                    />
                  </li>
                  <li>
                    <img
                      src="src/assets/images/icons8-tic-tac-100.png"
                      alt="" className="w-10"
                    />
                  </li>
                </ul>
              </section>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
