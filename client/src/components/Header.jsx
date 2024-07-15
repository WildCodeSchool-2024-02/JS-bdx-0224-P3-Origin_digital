import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { getData } from "../services/api.service";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isObjectivesMenuOpen, setIsObjectivesMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsObjectivesMenuOpen(false);
  };

  const handleClickMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsObjectivesMenuOpen(false);
  };

  const handleClickObjectivesMenu = () => {
    setIsObjectivesMenuOpen(!isObjectivesMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(
        ".menu-list, .objectives-menu, .burgerMenu, .objectivesButton"
      )
    ) {
      setIsObjectivesMenuOpen(false);
    }
  };

  const subscribeStyle = `mr-5 flex items-center relative
  lg:flex-row lg:opacity-100 lg:transform-none lg:static lg:max-h-16 `;

  const burgerButtonClasses = `burgerMenu relative w-10 h-7 bg-transparent text-0 hover:bg-transparent none border-none flex justify-self-end text-[0] mr-4 ;
  lg:hidden
  ${isMobileMenuOpen ? "active" : ""}`;

  const objectiveSectionClasses = `absolute top-[4.5rem] left-0 right-0 bottom-0 w-full uppercase bg-white list-none justify-around items-center text-center font-bold  flex-row z-50
  lg:top-[6rem] lg:bg-transparent
  ${isObjectivesMenuOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none"}`;

  const menuListClasses = `top-[4.5rem] w-full uppercase bg-white list-none flex flex-col justify-around items-center transform translate-x-[100vw] transition-all text-center fixed inset-0 
  lg:bg-[var(--secondaryColor)] lg:static lg:max-h-12 lg:flex-row lg:justify-around lg:opacity-100 lg:transform-none 
  ${isMobileMenuOpen ? "opacity-100 transform -translate-x-[0vw] duration-300" : ""}`;

  const objectivesButtonClasses = `objectivesButton font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline bg-transparent hover:bg-transparent hover:text-[var(--darkColor)] p-0 border-none cursor-pointer`;

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);

    if (isMobileMenuOpen || isObjectivesMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, isObjectivesMenuOpen]);

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getData(`/api/categories`)
      .then((result) => result.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    getData(`/api/tags`)
      .then((result) => result.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => console.error("Error fetching tags:", error));
  }, []);

  return (
    <Navbar
      isObjectivesMenuOpen={isObjectivesMenuOpen}
      closeMenu={closeMenu}
      handleClickMobileMenu={handleClickMobileMenu}
      handleClickObjectivesMenu={handleClickObjectivesMenu}
      burgerButtonClasses={burgerButtonClasses}
      objectiveSectionClasses={objectiveSectionClasses}
      menuListClasses={menuListClasses}
      objectivesButtonClasses={objectivesButtonClasses}
      subscribeStyle={subscribeStyle}
      categories={categories}
      tags={tags}
    />
  );
}

export default Header;
