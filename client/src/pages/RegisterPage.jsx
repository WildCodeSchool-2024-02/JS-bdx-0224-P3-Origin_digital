import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Subscription from "../components/Subscription";
import sendData from "../services/api.service";

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

const emptyFields = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  siret: "",
};

function RegisterPage() {
  const [fields, setFields] = useState(textLabel);
  const [formValues, setFormValues] = useState(emptyFields);
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const navigate = useNavigate();
  const path = useLocation();
  const registerContent = {
    title: "INSCRIPTION",
    button: "CRÉER VOTRE COMPTE",
    linkToConnection: "Déjà inscrit ? Connectez-vous",
  };

  const url = path.pathname.substring(1);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const data = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      password: formValues.password,
      siret: formValues.siret,
    };
    const response = await sendData("/users", data, "POST");

    if (response) {
      navigate("/login");
    } else {
      console.info(response);
    }
  };

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
    <Subscription
      handleClickProfile={handleClickProfile}
      handleChangeInputValue={handleChangeInputValue}
      fields={fields}
      formValues={formValues}
      customerButton={customerButton}
      professionalButton={professionalButton}
      generateFieldLabelClass={generateFieldLabelClass}
      handleSubmitForm={handleSubmitForm}
      emailRef={emailRef}
      firstNameRef={firstNameRef}
      lastNameRef={lastNameRef}
      navigate={navigate}
      setPassword={setPassword}
      password={password}
      url={url}
      registerContent={registerContent}
    />
  );
}

export default RegisterPage;
