import { useState } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/images/LogoSweatStream.png";

function Navbar() {
  const [menuState, setMenuState] = useState(false);

  const closeMenu = () => {
    setMenuState(false);
  };

  return (
    <header className="bg-[var(--secondaryColor)] flex items-center justify-between border-b">
      <nav id="navbar">
        <Link to="/">
          <img
            className="w-full lg:w-1/2"
            src={logoSrc}
            alt="retour à l'accueil"
          />
        </Link>
        <button type="button" onClick={() => setMenuState(!menuState)}>
          {menuState ? "x" : "≡"}
        </button>

        <ul className={`burger-menu${menuState ? " active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Objectif
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Pourquoi s'abonner ?
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Mon espace
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Cocktails
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
