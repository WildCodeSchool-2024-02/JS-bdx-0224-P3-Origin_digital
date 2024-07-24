import { Link } from "react-router-dom";
import logoSrc from "../assets/images/LogoSweatStream.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--primaryColor)] p-4 lg:flex lg:p-10">
      <Link to="/">
        <img
          className="~w-[200px]/[300px] "
          src={logoSrc}
          alt="retour à l'accueil"
        />
      </Link>
      <ul className="flex flex-wrap gap-x-6 gap-y-6 lg:grow lg:justify-evenly lg:leading-10 ">
        <li className="grow lg:grow-0">
          <h3 className="footer-list">Pages</h3>
          <ul>
            <li>
              <Link to="/" className="footer-list">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/#WhySubscribe" className="footer-list">
                Pourquoi s'abonner
              </Link>
            </li>
            <li>
              <Link to="/register" className="footer-list">
                Inscription utilisateur
              </Link>
            </li>
            <li>
              <Link to="/register" className="footer-list">
                Inscription coach
              </Link>
            </li>
            <li>
              <Link to="/login" className="footer-list">
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/account" className="footer-list">
                Mon espace
              </Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0 ">
          <h3 className="footer-list">Catégories</h3>
          <ul>
            <li>
              <Link to="/category/3" className="footer-list">
                Musculation
              </Link>
            </li>
            <li>
              <Link to="/category/4" className="footer-list">
                Pilate
              </Link>
            </li>
            <li>
              <Link to="/category/2" className="footer-list">
                Yoga
              </Link>
            </li>
            <li>
              <Link to="/category/1" className="footer-list">
                Fitness
              </Link>
            </li>
            <li>
              <Link to="/category/5" className="footer-list">
                Nutrition
              </Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0">
          <h3>Réseaux</h3>
          <ul className="flex justify-between items-start md:block m-0">
            <li>
              <Link to="/contact" className="footer-list">
                Contact
              </Link>
            </li>
            <li className="m-0">
              <ul className="flex justify-around grow md:justify-start">
                <li className="m-0">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img
                      src="src/assets/images/icons8-facebook-100.png"
                      alt="Facebook"
                      className="w-10"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <img
                      src="src/assets/images/icons8-instagram-100.png"
                      alt="Instagram"
                      className="w-10"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
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
