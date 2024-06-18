import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--primaryColor)] p-4 lg:flex lg:p-10 ">
      <h2 className="italic font-extrabold uppercase">
        <Link to="/">Sweat Stream</Link>
      </h2>
      <ul className="flex flex-wrap gap-x-6 gap-y-6 lg:grow lg:justify-evenly lg:leading-10">
        <li className="grow lg:grow-0">
          <h3>
            <Link to="/">Pages</Link>
          </h3>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/">Pourquoi s'abonner</Link>
            </li>
            <li>
              <Link to="/">Inscription utilisateur</Link>
            </li>
            <li>
              <Link to="/">Inscription coach</Link>
            </li>
            <li>
              <Link to="/">Connexion</Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0">
          <h3>
            <Link to="/">Catégories</Link>
          </h3>
          <ul>
            <li>
              <Link to="/">Musculation</Link>
            </li>
            <li>
              <Link to="/">Pilate</Link>
            </li>
            <li>
              <Link to="/">Yoga</Link>
            </li>
            <li>
              <Link to="/">Fitness</Link>
            </li>
            <li>
              <Link to="/">Nutrition</Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0">
          <h3>Réseaux</h3>
          <ul className="flex justify-between items-start md:block m-0">
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li className="m-0">
              <ul className="flex justify-around grow md:justify-start">
                <li className="m-0">
                  <a href="facebook.com">
                    <img
                      src="src/assets/images/icons8-facebook-100.png"
                      alt="Facebook"
                      className="w-10"
                    />
                  </a>
                </li>
                <li>
                  <a href="instagram.com">
                    <img
                      src="src/assets/images/icons8-instagram-100.png"
                      alt="Instagram"
                      className="w-10"
                    />
                  </a>
                </li>
                <li>
                  <a href="tiktok.com">
                    <img
                      src="src/assets/images/icons8-tic-tac-100.png"
                      alt="TikTok"
                      className="w-10"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}