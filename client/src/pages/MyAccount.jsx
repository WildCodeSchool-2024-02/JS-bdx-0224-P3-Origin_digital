import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getSecureData } from "../services/api.service";

function MyAccount() {
const [cookies] = useCookies()
const token = cookies.jwt
const [user, setUser] = useState([]);

useEffect(() => {
  getSecureData("/api/users", token)
  .then((result) => result.json())
  .then((data) => {
    setUser(data);
  });
}, [token]);


  return (
    <>
      <h2 className="m-5">Mon espace</h2>
      <ul className="flex flex-col justify-start items-start bg-primary-light rounded-md mx-5 mb-8 p-5 md:mb-60 lg:mb-52">
        <h3>Information du compte</h3>
        <li>Status: abonné</li>
        <li>Prénom: {user.firstname} </li>
        <li>Nom: {user.lastname} </li>
        <li>Adresse mail: {user.email}</li>
        <Link to="/dashboard">
          <button type="button">Accéder à mon tableau de bord</button>
        </Link>
      </ul>
    </>
  );
}

export default MyAccount;

