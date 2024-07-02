import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isObjectivesMenuOpen, setIsObjectivesMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsObjectivesMenuOpen(false);
  };

  const handleClickMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickObjectivesMenu = () => {
    setIsObjectivesMenuOpen(!isObjectivesMenuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const subscribeStyle = `mr-5 flex lg:flex-row lg:opacity-100 lg:transform-none  lg:static lg:max-h-16
  items-center relative`;

  const burgerButtonClasses = `burgerMenu relative w-10 h-7 bg-transparent text-0 hover:bg-transparent none border-none 
    flex justify-self-end text-[0] mr-4
    lg:hidden
    ${isMobileMenuOpen ? "active" : ""}`;

  const objectiveSectionClasses = `absolute top-[4.5rem] left-0 right-0 bottom-0 w-full 
    uppercase bg-white list-none justify-around items-center text-center font-bold
    lg:top-[6rem] flex-row z-50 lg:bg-transparent 
    ${isObjectivesMenuOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none"}`;

  const menuListClasses = `top-[4.5rem] h-[calc(100vh-4.5rem)] w-full uppercase bg-white list-none 
    flex flex-col justify-around items-center 
    transform translate-x-[100vw] transition-all duration-300 text-center fixed inset-0
    lg:bg-[var(--secondaryColor)] lg:static lg:max-h-12 lg:flex-row lg:justify-around lg:opacity-100 lg:transform-none 
    ${isMobileMenuOpen ? "opacity-100 transform translate-x-[0vw]" : ""}`;

  const objectivesButtonClasses = `font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline bg-transparent 
    hover:bg-transparent hover:text-[var(--darkColor)] 
    p-0 border-none cursor-pointer`;

  // fetch

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/category")
      .then((result) => result.json())
      .then((data) => {
        setCategories(data);
      })

    fetch("http://localhost:3310/api/tag")
      .then((result) => result.json())
      .then((data) => {
        setTags(data);
      })
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
