// import { createContext, useContext} from 'react'
// import { useCookies } from 'react-cookie';
// import PropTypes from "prop-types";

// const CookieContext = createContext();

// export function CookieProvider({ children }) {
//   const [cookie, setCookie, removeCookie] = useCookies("jwt");

//   return (
//       <CookieContext.Provider value={{cookie, setCookie, removeCookie}}>
//           {children}
//       </CookieContext.Provider>
//   )
// };

// export const useCookie = () => useContext(CookieContext);

// CookieContext.PropTypes = {
//   children: PropTypes.shape(),
//  }

//  CookieContext.defaultProps = {
//   children:{},
// };