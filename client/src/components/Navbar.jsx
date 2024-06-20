import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logoSrc from "../assets/images/LogoSweatStream.png";

function Navbar({
  isObjectivesMenuOpen,
  closeMenu,
  handleClick,
  handleChange,
  signInClasses,
  signUpClasses,
  burgerButtonClasses,
  menuListClasses,
  objectivesButtonClasses,
  objectiveSectionClasses,
}) {
  return (
    <header className="bg-[var(--secondaryColor)] h-20 lg:h-24 flex items-center">
      <nav
        id="navbar"
        className="grid grid-cols-2 items-center w-full h-[4.5rem] px-4 lg:px-8  lg:flex"
      >
        <Link to="/">
          <img
            className="~w-[250px]/[350px] "
            src={logoSrc}
            alt="retour à l'accueil"
          />
        </Link>
        <button
          type="button"
          onClick={handleClick}
          className={burgerButtonClasses}
          title="Menu déroulant"
        >
          Menu déroulant
          <span className="line-burger top-0 origin-left" />
          <span className="line-burger top-1/2 -translate-y-1/2 origin-left" />
          <span className="line-burger top-full -translate-y-full origin-left" />
        </button>

        <ul className={menuListClasses}>
          <li>
            <button
              onClick={handleChange}
              className={objectivesButtonClasses}
              type="button"
            >
              Objectifs
            </button>
          </li>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline"
            >
              Pourquoi s'abonner ?
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline"
            >
              Mon espace
            </Link>
          </li>
        </ul>
      </nav>
      <button className={signInClasses} type="button">
        {" "}
        <Link to="/" className="text-[var(--darkColor)] hover:text-white">
          inscription
        </Link>
      </button>
      <button className={signUpClasses} type="button">
        <Link to="/" className="text-[var(--darkColor)] hover:text-white">
          connexion
        </Link>
      </button>
      {isObjectivesMenuOpen && (
        <nav className={objectiveSectionClasses}>
          <button
            className="absolute top-0 right-0 px-6 py-6 bg-transparent hover:bg-transparent"
            type="button"
            aria-label="bouton fermant dans objectif"
            onClick={handleChange}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex flex-col items-center justify-between bg-transparent">
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link
                to="/category1"
                className="text-[var(--darkColor)] visited:text-[var(--darkColor)]"
              >
                yoga
                <ul>
                  <li>#tag1</li>
                  <li>#tag1</li>
                  <li>#tag1</li>
                </ul>
              </Link>
              <ul>
                <li>#tag1</li>
                <li>#tag1</li>
                <li>#tag1</li>
              </ul>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link
                to="/category2"
                className="text-[var(--darkColor)] visited:text-[var(--darkColor)]"
              >
                Musculation
              </Link>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <Link
                to="/category3"
                className="text-[var(--darkColor)] visited:text-[var(--darkColor)]"
              >
                Pilates
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

Navbar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isObjectivesMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  signInClasses: PropTypes.string.isRequired,
  signUpClasses: PropTypes.string.isRequired,
  burgerButtonClasses: PropTypes.string.isRequired,
  menuListClasses: PropTypes.string.isRequired,
  objectivesButtonClasses: PropTypes.string.isRequired,
  objectiveSectionClasses: PropTypes.string.isRequired,
};

export default Navbar;
