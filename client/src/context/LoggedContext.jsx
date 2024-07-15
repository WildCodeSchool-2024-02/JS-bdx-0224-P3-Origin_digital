import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";
import { getSecureData } from "../services/api.service";

const LoggedContext = createContext();

export function LoggedProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies("jwt");
  const [isLogged, setIsLogged] = useState(false);
  const [isCoach, setIsCoach] = useState({});
  const token = cookies.jwt;

  useEffect(() => {
    getSecureData("/api/users", token)
      .then((result) => result.json())
      .then((data) => {
        setIsCoach(data);
      });
  }, [token]);

  useEffect(() => {
    if (cookies.jwt) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [cookies, setCookie]);

  const handleLogout = () => {
    removeCookie("jwt");
    setIsLogged(false);
  };

  const contextValue = useMemo(
    () => ({
      isLogged,
      handleLogout,
      isCoach,
    }),
    [isLogged,handleLogout, isCoach]
  );

  return (
    <LoggedContext.Provider value={contextValue}>
      {children}
    </LoggedContext.Provider>
  );
}

LoggedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedContext;
