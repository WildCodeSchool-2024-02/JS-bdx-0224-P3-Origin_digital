import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
  category,
}) {
  return (
    <header className="bg-[var(--secondaryColor)] h-20 lg:h-24 flex items-center">
      <nav className="grid grid-cols-2 items-center w-full h-[4.5rem] px-4 lg:px-8  lg:flex">
        <Link to="/">
          <img
            className="~w-[250px]/[350px] "
            src={logoSrc}
            alt="retour à l'accueil"
          />
        </Link>

        <ul className={`${menuListClasses} z-10`}>
          <li className="flex">
            <button
              onClick={handleClickObjectivesMenu}
              className={`${objectivesButtonClasses} h-auto uppercase`}
              type="button"
            >
              Objectifs
            </button>
            <img
              className="ml-1"
              src={arrowSrc}
              alt="flèche indiquant qu'objectif est déroulant"
            />
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
      <button
        className={`${subscribeStyle} bg-white border-8 border-indigo-500`}
        type="button"
      >
        {" "}
        <Link
          to="/subscription"
          className="text-[var(--darkColor)] hover:text-white"
        >
          Inscription
        </Link>
      </button>
      <button className={subscribeStyle} type="button">
        <Link to="/signin" className="text-[var(--darkColor)] hover:text-white">
          Connexion
        </Link>
      </button>
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
          <ul className="flex flex-col items-center justify-around bg-white lg:flex-row">
            {category.map((categories) => (
              <li
                key={category.id}
                className="border-b border-gray-400 my-8 uppercase"
              >
                <Link
                  to={`/category/${category.id}`}
                  className="text-[var(--darkColor)] visited:text-[var(--darkColor)]"
                >
                  {categories.name}
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
  category: PropTypes.string.isRequired
};

export default Navbar;
