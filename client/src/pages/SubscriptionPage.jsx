import { useState, useEffect } from "react";
import fitnessImg from "../assets/images/training.jpg";

const textLabel = [
  {
    type: "text",
    id: "firstname",
    for: "firstname",
    text: "Prénom",
  },
  {
    type: "text",
    id: "lastname",
    for: "lastname",
    text: "Nom",
  },
  {
    type: "email",
    id: "email",
    for: "email",
    text: "Adresse mail",
  },
  {
    type: "password",
    id: "password",
    for: "password",
    text: "Mot de passe",
  },
];

const siret = {
  type: "text",
  id: "siret",
  for: "siret",
  text: "N° de SIRET",
};

function SubscriptionPage() {
  const [fields, setFields] = useState(textLabel);
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    siret: "",
  });

  const handleClickCustomer = () => {
    setFields(textLabel);
    setFormValues({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const handleClickProfessional = () => {
    setFields([...textLabel, siret]);
    setFormValues({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      siret: "",
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  useEffect(() => {
    handleClickCustomer();
  }, []);

  return (
    <section className="flex justify-center items-center">
      <figure className="hidden md:flex">
        <img
          src={fitnessImg}
          alt="sportifs"
          className="img-shadow w-[calc(100%-15px)] mr-auto rounded-xl mb-4 h-60 object-cover"
        />
      </figure>
      <article className="flex flex-col items-center w-full h-full">
        <ul className="flex items-center text-center w-full h-14 rounded-t-lg">
          <li className="font-bold h-full m-0 flex-1 flex justify-center items-center">
            <button
              onClick={handleClickCustomer}
              className={`w-full h-full rounded-none rounded-tl-lg cursor-pointer ${fields.length === textLabel.length ? "bg-pcd text-lc" : "bg-pc"}`}
              type="button"
            >
              PARTICULIER
            </button>
          </li>
          <li className="font-bold h-full m-0 flex-1 flex justify-center items-center">
            <button
              onClick={handleClickProfessional}
              className={`w-full h-full rounded-none rounded-tr-lg cursor-pointer ${fields.length > textLabel.length ? "bg-pcd text-lc" : "bg-pc"}`}
              type="button"
            >
              PROFESSIONNEL
            </button>
          </li>
        </ul>
        <form className="flex flex-col items-center justify-around w-full h-full px-4 border border-pc rounded-b-lg">
          <h2 className="font-bold my-10">INSCRIPTION</h2>
          {fields.map((info) => (
            <fieldset key={info.id} className="relative w-full pb-10">
              <input
                type={info.type}
                id={info.id}
                name={info.text}
                value={formValues[info.id]}
                onChange={handleChange}
                className="border-b-2 border-dc py-1 focus:border-b-2 focus:border-pc transition-colors focus:outline-none peer bg-inherit w-full"
              />
              <label
                htmlFor={info.id}
                className={`left-1 top-0 font-semibold cursor-text absolute transition-all
                            ${formValues[info.id] ? "-top-4 text-sm" : "top-0 text-base"}
                            peer-focus:-top-4 peer-focus:text-sm peer-focus:text-pcd`}
              >
                {info.text}
              </label>
            </fieldset>
          ))}
          <button className="mb-28" type="button">
            CRÉER VOTRE COMPTE
          </button>
        </form>
      </article>
    </section>
  );
}

export default SubscriptionPage;
