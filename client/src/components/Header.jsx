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
    setIsObjectivesMenuOpen(false);
  };

  const handleClickObjectivesMenu = () => {
    setIsObjectivesMenuOpen(!isObjectivesMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  const signInClasses = `
    mr-5 bg-white flex justify-around items-center transform transition-all duration-300 fixed 
    lg:static lg:max-h-16 lg:flex-row lg:justify-around lg:opacity-100 lg:transform-none
    ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "-translate-y-[100vh]"}`;

  const signUpClasses = `mr-5 flex items-center transform transition-all duration-300 fixed 
    lg:static lg:max-h-16 lg:flex-row lg:justify-around lg:opacity-100 lg:transform-none
    ${isMobileMenuOpen ? "opacity-100 transform translate-y-0" : "-translate-y-[100vh]"}`;

  const burgerButtonClasses = `burgerMenu relative w-10 h-7 bg-transparent text-0 hover:bg-transparent none border-none 
    flex justify-self-end text-[0]
    lg:hidden
    ${isMobileMenuOpen ? "active" : ""}`;

  const objectiveSectionClasses = `absolute top-[4.5rem] left-0 right-0 bottom-0 w-full bg-white lg:bg-transparent
    uppercase list-none justify-around items-center transform transition-all text-center 
    lg:top-[6rem] lg:flex-row 
    ${isObjectivesMenuOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none"}`;

  const menuListClasses = `top-[4.5rem] h-[calc(100vh-4.5rem)] w-full uppercase bg-white list-none 
    flex flex-col justify-around items-center 
    transform -translate-y-[100vh] transition-all duration-300 text-center fixed inset-0
    lg:bg-[var(--secondaryColor)] lg:static lg:max-h-12 lg:flex-row lg:justify-around lg:opacity-100 lg:transform-none 
    ${isMobileMenuOpen ? "opacity-100 transform translate-y-0" : ""}`;

  const objectivesButtonClasses = `font-[var(--secondaryFont)] text-[var(--darkColor)] no-underline bg-transparent 
    hover:bg-transparent hover:text-[var(--darkColor)] 
    p-0 border-none cursor-pointer`;

  return (
    <Navbar
      isObjectivesMenuOpen={isObjectivesMenuOpen}
      closeMenu={closeMenu}
      handleClickMobileMenu={handleClickMobileMenu}
      handleClickObjectivesMenu={handleClickObjectivesMenu}
      signInClasses={signInClasses}
      signUpClasses={signUpClasses}
      burgerButtonClasses={burgerButtonClasses}
      objectiveSectionClasses={objectiveSectionClasses}
      menuListClasses={menuListClasses}
      objectivesButtonClasses={objectivesButtonClasses}
    />
  );
}

export default Header;
