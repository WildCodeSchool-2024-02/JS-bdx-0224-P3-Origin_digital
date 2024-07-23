import { Link } from "react-router-dom";
import { useContext } from "react";
import LoggedContext from "../context/LoggedContext";
import yoga from "../assets/images/yoga.jpg";
import Footer from "../components/Footer";

function MyAccount() {
  const { userData } = useContext(LoggedContext);

  return (
    <main className="min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
      <h2 className="m-5">Mon espace</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 gap-0 bg-secondary-color rounded-xl mx-5 mb-8 px-5 pt-5 pb-9">
        <h3 className="gridMyAccount md:col-end-2 row-start-1 row-end-2">
          Information du compte
        </h3>
        <li className="gridMyAccount md:col-end-2 row-start-2 row-end-3">
          Status: abonné
        </li>
        <li className="gridMyAccount md:col-end-2 row-start-3 row-end-4">
          Prénom: {userData.firstname}
        </li>
        <li className="gridMyAccount md:col-end-2 row-start-4 row-end-5">
          Nom: {userData.lastname}
        </li>
        <li className="gridMyAccount md:col-end-2 row-start-5 row-end-6">
          Adresse mail: {userData.email}
        </li>
        {userData.role_id === 3 && (
          <Link
            to="/dashboard"
            className="gridMyAccount text-xs md:col-end-2 row-start-6 row-end-7 rounded-xl bg-primary-color h-8 px-4 py-2 font-semibold transition-all duration-300 ease-linear cursor-pointer flex justify-center items-center hover:text-light-color hover:bg-primary-dark md:w-96 md:h-10 md:text-xl"
          >
            Accéder à mon tableau de bord
          </Link>
        )}
        <img
          src={yoga}
          alt="groupe de personne qui fait du yoga"
          className="hidden md:block col-start-2 col-end-3 row-start-1 row-end-7 place-self-center img-shadow rounded-xl"
        />
      </ul>
    </main>
  );
}

export default MyAccount;

