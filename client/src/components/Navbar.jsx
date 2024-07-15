import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";
import logoSrc from "../assets/images/LogoSweatStream.png";
import arrowSrc from "../assets/images/objectiveArrow.png";

function Navbar({
  isObjectivesMenuOpen,
  closeMenu,
  handleClickMobileMenu,
  handleClickObjectivesMenu,
  subscribeStyle,
  burgerButtonClasses,
  menuListClasses,
  objectivesButtonClasses,
  objectiveSectionClasses,
  categories,
}) {
  const { isLogged, handleLogout } = useContext(LoggedContext);

  return (
    <header className="bg-[var(--secondaryColor)] h-20 lg:h-24 flex items-center">
      <nav className="items-center w-full h-[4.5rem] px-2 lg:px-8 flex">
        <Link to="/">
          <img
            className="~w-[300px]/[450px]"
            src={logoSrc}
            alt="retour à l'accueil"
          />
        </Link>

        <ul className={`${menuListClasses} z-10`}>
          <li className="flex">
            <button
              onClick={handleClickObjectivesMenu}
              className={`${objectivesButtonClasses} h-auto uppercase flex items-center`}
              type="button"
            >
              Objectifs
              <img
                className="ml-1"
                src={arrowSrc}
                alt="flèche indiquant qu'objectif est déroulant"
              />
            </button>
          </li>
          <li>
            <HashLink
              to="/#WhySubscribe"
              onClick={closeMenu}
              className="font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline"
            >
              Pourquoi s'abonner ?
            </HashLink>
          </li>
          {isLogged ? (
            <li>
              <Link
                to="/account"
                onClick={closeMenu}
                className="font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline"
              >
                Mon espace
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                onClick={closeMenu}
                className="font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline"
              >
                Mon espace
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {isLogged ? (
        <Link
          to="/"
          className={`${subscribeStyle} buttonForLink text-[var(--darkColor)] hover:text-white text-xs lg:text-base`}
          onClick={handleLogout}
        >
          Déconnexion
        </Link>
      ) : (
        <>
          <button
            className={`${subscribeStyle} bg-white border-8 border-indigo-500`}
            type="button"
          >
            <Link
              to="/register"
              className="text-[var(--darkColor)] hover:text-white text-xs lg:text-base"
            >
              Inscription
            </Link>
          </button>
          <button className={subscribeStyle} type="button">
            <Link
              to="/login"
              className="text-[var(--darkColor)] hover:text-white text-xs lg:text-base "
            >
              Connexion
            </Link>
          </button>
        </>
      )}
      <button
        type="button"
        onClick={handleClickMobileMenu}
        className={burgerButtonClasses}
        aria-label="Menu déroulant"
      >
        <span className="line-burger top-0 origin-left" />
        <span className="line-burger top-1/2 -translate-y-1/2 origin-left" />
        <span className="line-burger top-full -translate-y-full origin-left" />
      </button>
      {isObjectivesMenuOpen && (
        <nav className={objectiveSectionClasses}>
          <button
            className="absolute top-0 right-0 px-6 py-6 bg-transparent hover:bg-transparent"
            type="button"
            aria-label="bouton fermant dans objectif"
            onClick={handleClickObjectivesMenu}
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
          <ul className="flex flex-wrap justify-around bg-white">
            {categories.map((category) => (
              <li
                key={category.id}
                className=" border-b border-gray-400 my-8 w-1/2 lg:w-1/6"
              >
                <Link
                  to={`/category/${category.id}`}
                  className="text-[var(--darkColor)] visited:text-[var(--darkColor)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

Navbar.propTypes = {
  handleClickObjectivesMenu: PropTypes.func.isRequired,
  handleClickMobileMenu: PropTypes.func.isRequired,
  isObjectivesMenuOpen: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  subscribeStyle: PropTypes.string.isRequired,
  burgerButtonClasses: PropTypes.string.isRequired,
  menuListClasses: PropTypes.string.isRequired,
  objectivesButtonClasses: PropTypes.string.isRequired,
  objectiveSectionClasses: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
