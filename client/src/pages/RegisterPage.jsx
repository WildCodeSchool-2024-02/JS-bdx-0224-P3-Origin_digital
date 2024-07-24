import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const emptyFields = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  siret: "",
};

const registerContent = {
  title: "INSCRIPTION",
  button: "CRÉER VOTRE COMPTE",
  linkToLogin: "Déjà inscrit ? Connectez-vous",
};

function RegisterPage() {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const siretRef = useRef();

  const textLabel = [
    {
      type: "text",
      id: "firstname",
      for: "firstname",
      text: "Prénom",
      ref: firstNameRef,
    },
    {
      type: "text",
      id: "lastname",
      for: "lastname",
      text: "Nom",
      ref: lastNameRef,
    },
    {
      type: "email",
      id: "email",
      for: "email",
      text: "Adresse mail",
      ref: emailRef,
    },
    {
      type: "password",
      id: "password",
      for: "password",
      text: "Mot de passe",
      ref: null,
      pattern:
        "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$",
    },
  ];

  const siret = {
    type: "text",
    id: "siret",
    for: "siret",
    text: "N° de SIRET",
    ref: siretRef,
  };

  const navigate = useNavigate();
  const path = useLocation();
  const [formValues, setFormValues] = useState(emptyFields);
  const [fields, setFields] = useState(textLabel);
  const url = path.pathname.substring(1);

  const handleClickProfile = (isProfessional) => {
    if (isProfessional) {
      setFields([...textLabel, siret]);
    } else {
      setFields(textLabel);
    }
    setFormValues(emptyFields);
  };

  const handleChangeInputValue = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const btnFormClass = "w-full h-full p-0 rounded-none cursor-pointer";

  const customerButton = `${btnFormClass} rounded-tl-lg ${
    fields.length === textLabel.length
      ? "bg-primary-dark text-light-color"
      : "bg-primary-color"
  }`;
  const professionalButton = `${btnFormClass} rounded-tr-lg ${
    fields.length > textLabel.length
      ? "bg-primary-dark text-light-color"
      : "bg-primary-color"
  }`;

  const generateFieldLabelClass = (id) =>
    `label ${formValues[id].length > 0 ? "active" : ""}`;

  return (
    <>
      <Subscription
        handleClickProfile={handleClickProfile}
        handleChangeInputValue={handleChangeInputValue}
        fields={fields}
        formValues={formValues}
        customerButton={customerButton}
        professionalButton={professionalButton}
        generateFieldLabelClass={generateFieldLabelClass}
        emailRef={emailRef}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        navigate={navigate}
        url={url}
        registerContent={registerContent}
      />
      <Footer />
    </>
  );
}

export default RegisterPage;
