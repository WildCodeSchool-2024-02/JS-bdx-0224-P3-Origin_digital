import { useState } from "react";
import { Link } from "react-router-dom";
import logoSrc from "../assets/images/LogoSweatStream.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isObjectivesMenuOpen, setIsObjectivesMenuOpen] = useState(false);
  const [isDesktopObjectivesMenuOpen, setIsDesktopObjectivesMenuOpen] =
    useState(false);

  return (
    <header className="bg-[var(--secondaryColor)] flex items-center justify-between border-b">
      <Link to="/">
        <img
          className="w-full lg:w-1/2"
          src={logoSrc}
          alt="retour à l'accueil"
        />
      </Link>
      <nav>
        <section className="MOBILE-MENU lg:hidden">
          <button
            className="HAMBURGER-ICON space-y-2 bg-[var(--secondaryColor)] hover:bg-[var(--secondaryColor)]"
            type="button"
            aria-label="bouton menu en haut de page"
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            <span className="block h-0.5 w-8 bg-gray-600" />
            <span className="block h-0.5 w-8 bg-gray-600" />
            <span className="block h-0.5 w-8 bg-gray-600" />
          </button>

          <div
            className={`${
              isNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-500 fixed inset-0 bg-white z-10 flex flex-col justify-evenly items-center`}
          >
            <button
              className="absolute top-0 right-0 px-8 py-8 bg-transparent hover:bg-transparent"
              type="button"
              aria-label="bouton menu fermant en haut de page"
              onClick={() => setIsNavOpen(false)}
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
            <ul className="flex flex-col items-center justify-between min-h-[250px] bg-transparent">
              <li className="border-b border-gray-400 my-8 uppercase">
                <button
                  type="button"
                  aria-label="bouton menu fermant en haut de page"
                  onClick={() => {
                    setIsObjectivesMenuOpen((prev) => !prev);
                  }}
                  className="text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
                >
                  objectifs
                </button>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link
                  to="/"
                  className="text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
                >
                  pourquoi s'abonner ?
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link
                  to="/"
                  className="text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
                >
                  mon espace
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex relative">
          <li className="relative">
            <button
              type="button"
              onClick={() => setIsDesktopObjectivesMenuOpen((prev) => !prev)}
              className="uppercase text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
            >
              objectifs
            </button>
            {isDesktopObjectivesMenuOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md flex">
                <li className="border-b border-gray-400 my-2 uppercase">
                  <Link
                    to="/category1"
                    className="block px-4 py-2 text-[var(--darkColor)] visited:text-[var(--darkColor)]"
                  >
                    yoga
                  </Link>
                  <ul className="flex w-60 flex-wrap px-4 [&>*]:pl-5 [&>*]:[&>*]:text-[var(--darkColor)]   [&>*]:visited:text-[var(--darkColor)]">
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                    <li>
                      <Link to="/">#tag1 </Link>
                    </li>
                  </ul>
                </li>
                <li className="border-b border-gray-400 my-2 uppercase">
                  <Link
                    to="/category2"
                    className="block px-4 py-2 text-[var(--darkColor)] visited:text-[var(--darkColor)]"
                  >
                    Musculation
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-2 uppercase">
                  <Link
                    to="/category3"
                    className="block px-4 py-2 text-[var(--darkColor)] visited:text-[var(--darkColor)]"
                  >
                    Pilates
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/portfolio"
              className="uppercase text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
            >
              pourquoi s'abonner ?
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="uppercase text-[var(--darkColor)] visited:text-[var(--darkColor)] bg-transparent hover:bg-transparent"
            >
              mon espace
            </a>
          </li>
        </ul>
      </nav>

      {isObjectivesMenuOpen && (
        <div
          className={`${
            isObjectivesMenuOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          } transition-opacity duration-500 fixed inset-0 bg-white z-10 flex flex-col justify-evenly items-center`}
        >
          <button
            className="absolute top-0 right-0 px-8 py-8 bg-transparent hover:bg-transparent"
            type="button"
            aria-label="bouton fermant dans objectif"
            onClick={() => setIsObjectivesMenuOpen(false)}
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
          <ul className="flex flex-col items-center justify-between min-h-[250px] bg-transparent">
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
        </div>
      )}
    </header>
  );
}
