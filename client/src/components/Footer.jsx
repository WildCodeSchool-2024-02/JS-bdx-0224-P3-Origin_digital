import { Link } from "react-router-dom";
import logoSrc from "../assets/images/LogoSweatStream.png";
import insta from "../assets/images/icons8-instagram-100.png";
import facebook from "../assets/images/icons8-facebook-100.png";
import tiktok from "../assets/images/icons8-tic-tac-100.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--primaryColor)] lg:flex lg:gap-4 lg:pt-8">
      <Link to="/">
        <img
          className="~w-[200px]/[300px] "
          src={logoSrc}
          alt="retour à l'accueil"
        />
      </Link>
      <ul className="flex flex-wrap gap-x-6 gap-y-6 lg:grow lg:justify-between lg:leading-10 ">
        <li className="grow lg:grow-0">
          <h3 className="mb-4">Pages</h3>
          <ul className="grid grid-cols-1 gap-2">
            <li>
              <Link to="/" className="footer-list">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/register" className="footer-list">
                Inscription
              </Link>
            </li>
            <li>
              <Link to="/login" className="footer-list ">
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/account" className="footer-list ">
                Mon espace
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-list">
                Contact
              </Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0 ">
          <h3 className="mb-4">Catégories</h3>
          <ul>
            <li>
              <Link to="/category/3" className="footer-list">
                Musculation
              </Link>
            </li>
            <li>
              <Link to="/category/4" className="footer-list ">
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
          <h3 className="mb-4">Réseaux</h3>
          <ul className="flex justify-between md:justify-start items-start m-0">
            <li className="m-0 hover:opacity-80 duration-300">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="Facebook" className="w-10" />
              </a>
            </li>
            <li className="hover:opacity-80 duration-300">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-10" />
              </a>
            </li>
            <li className="hover:opacity-80 duration-300">
              <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                <img src={tiktok} alt="TikTok" className="w-10" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
