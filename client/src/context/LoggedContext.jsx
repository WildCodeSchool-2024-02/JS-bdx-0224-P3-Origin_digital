import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const LoggedContext = createContext();

export function LoggedProvider({ children }) {
  const [cookies, removeCookie] = useCookies(['jwt']);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (cookies.jwt) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [cookies]);

  const handleLogout = () => {
    removeCookie('jwt', { path: '/' });
    setIsLogged(false);
  };

  const contextValue = useMemo(() => ({
    isLogged,
    handleLogout,
  }), [isLogged]);

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