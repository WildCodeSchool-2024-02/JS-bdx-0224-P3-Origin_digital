import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext, useState, useEffect } from "react";
import LoggedContext from "../context/LoggedContext";
import logoSrc from "../assets/images/LogoSweatStream.png";

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
  const [menuMaxHeight, setMenuMaxHeight] = useState("max-h-0");

  useEffect(() => {
    if (isObjectivesMenuOpen) {
      setMenuMaxHeight("max-h-50");
    } else {
      setMenuMaxHeight("max-h-0");
    }
  }, [isObjectivesMenuOpen]);

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

        <ul className={`${menuListClasses} z-1`}>
          <li className="flex">
            <button
              onClick={handleClickObjectivesMenu}
              className={`${objectivesButtonClasses} h-auto hover:text-primary-dark flex items-center`}
              type="button"
            >
              Objectifs
              <svg
                className={`w-4 lg:w-5 ml-1 transition-transform duration-300 ${
                  isObjectivesMenuOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="26.000000pt"
                height="26.000000pt"
                viewBox="0 0 26.000000 26.000000"
                preserveAspectRatio="xMidYMid meet"
                fill="currentColor"
              >
                <g
                  transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                >
                  <path d="M73 234 c-4 -10 9 -31 38 -60 l43 -44 -43 -44 c-29 -29 -42 -50 -38 -60 10 -25 19 -20 82 44 l59 60 -59 60 c-63 64 -72 69 -82 44z" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <HashLink
              to="/#WhySubscribe"
              onClick={closeMenu}
              className="font-[var(--secondaryFont)] hover:text-primary-dark text-[var(--darkColor)] no-underline"
            >
              {isLogged ? "En ce moment" : "Pourquoi s'abonner ?"}
            </HashLink>
          </li>
          {isLogged && (
            <li>
              <Link
                to="/account"
                onClick={closeMenu}
                className="font-[var(--secondaryFont)] hover:text-primary-dark text-[var(--darkColor)] no-underline"
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
              className="text-[var(--darkColor)]  hover:text-white text-xs lg:text-base "
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
      <nav
        className={`${objectiveSectionClasses} transition-max-height duration-500 ease-in-out overflow-hidden ${menuMaxHeight}`}
      >
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
        <ul className=" gap-10 lg:gap-0 flex flex-col lg:flex-row justify-around bg-secondary-color border-t border-black">
          {categories.map((category) => (
            <li key={category.id} className=" my-8">
              <Link
                to={`/category/${category.id}`}
                className=" border-b border-gray-400 text-[var(--darkColor)] hover:text-primary-dark hover:border-primary-dark visited:text-[var(--darkColor)]"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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
