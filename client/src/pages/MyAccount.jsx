import { Link } from "react-router-dom";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";

function MyAccount() {
  
  const { userData } = useContext(LoggedContext);

  return (
    <>
      <h2 className="m-5">Mon espace</h2>
      <ul className="flex flex-col justify-start items-start bg-secondary-color rounded-md mx-5 mb-8 p-5 md:mb-60 lg:mb-52">
        <h3>Information du compte</h3>
        <li>Status: abonné</li>
        <li>Prénom: {userData.firstname} </li>
        <li>Nom: {userData.lastname} </li>
        <li>Adresse mail: {userData.email}</li>
        {(userData.role_id === 3) && <Link to="/dashboard" className="rounded-xl bg-primary-color h-8 px-4 py-2 font-semibold transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center hover:text-light-color hover:bg-primary-dark">
          Accéder à mon tableau de bord
        </Link>}
      </ul>
    </>
  );
}

export default MyAccount;

