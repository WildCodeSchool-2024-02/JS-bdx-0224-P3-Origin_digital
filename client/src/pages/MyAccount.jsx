import { Link } from "react-router-dom";
import { useContext } from "react";
import { useInView } from 'react-intersection-observer';
import LoggedContext from "../context/LoggedContext";
import yoga from "../assets/images/yoga.jpg";
import Footer from "../components/Footer";

function MyAccount() {
  const { userData } = useContext(LoggedContext);

  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  }`;

  return (
    <>
      <main ref={inViewRef} className={`${fadeInClass} min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] min-h-[calc(100vh-5rem)] flex flex-col items-start justifify-center px-4 md:px-8 lg:px-12`}>
        <h2 className="m-5">Mon espace</h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-6 gap-0 bg-secondary-color rounded-xl mx-5 mb-8 px-5 pt-5 pb-9">
          <h3 className="gridMyAccount md:col-end-2 row-start-1 row-end-2">
            Information du compte
          </h3>
          <li className="gridMyAccount md:col-end-2 row-start-2 row-end-3">
            <li className="md:col-span-2 row-start-2 row-end-3">
              Status:{" "}
              {userData.role_id === 3
                ? `Coach`
                : "Abonné"}
            </li>

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
      <Footer />
    </>
  );
}

export default MyAccount;
