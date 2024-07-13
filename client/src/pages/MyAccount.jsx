// import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function MyAccount() {
// const [cookies] = useCookies(["jwt"])
// const token = cookies.jwt


  return (
    <>
      <h2 className="m-5">Mon espace</h2>
      <ul className="flex flex-col justify-start items-start bg-primary-light rounded-md mx-5 mb-8 p-5 md:mb-60 lg:mb-52">
        <h3>Information du compte</h3>
        <li>Status: Abonnée</li>
        <li>Prénom: </li>
        <li>Nom:</li>
        <li>Adresse mail:</li>
        <Link to="/dashboard">
          <button type="button">Accéder à mon tableau de bord</button>
        </Link>
      </ul>
    </>
  );
}

export default MyAccount;
