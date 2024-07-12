import { useState, useEffect } from "react";
import { useCookies, removeCookie } from "react-cookie";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

export default function IsLogged() {
  const [cookies] = useCookies(["jwt"]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (cookies.jwt) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [cookies]);

  const handleLogout = () => {
    setIsLogged(false);
    removeCookie("jwt", { path: "/" });
  };

  return (
    <>
      <Navbar
        handleLogout={handleLogout}
        isLogged={isLogged}
      />
      <HeroSection 
      handleLogout={handleLogout}
      isLogged={isLogged}
      />
    </>
  );
}
