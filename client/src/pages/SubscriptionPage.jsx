import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Subscription from "../components/Subscription";
import sendData from "../services/api.service"

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

function SubscriptionPage() {
  const [fields, setFields] = useState(textLabel);
  const [formValues, setFormValues] = useState(emptyFields);
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const navigate = useNavigate();
  const path = useParams();

  console.info(path);

  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    
      const data = {
        firstname: firstNameRef.current.value,
        lastName : lastNameRef.current.value,
        email: emailRef.current.value,
        password,
      }

      const response = await sendData("/user", data, "POST");

      if (response) {
        navigate("/login");
      } else {
          console.info(response);
      }  
    
  };

  const handleClickCustomer = () => {
    setFields(textLabel);
    setFormValues(emptyFields);
  };

  const handleClickProfessional = () => {
    setFields([...textLabel, siret]);
    setFormValues(emptyFields);
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
      handleClickCustomer={handleClickCustomer}
      handleClickProfessional={handleClickProfessional}
      handleChange={handleChange}
      fields={fields}
      formValues={formValues}
      customerButton={customerButton}
      professionalButton={professionalButton}
      generateFieldLabelClass={generateFieldLabelClass}
      handleSubmitRegister={handleSubmitRegister}
      emailRef={emailRef}
      firstNameRef={firstNameRef}
      lastNameRef={lastNameRef}
      navigate={navigate}
      setPassword={setPassword}
      password={password}
    />
  );
}

export default SubscriptionPage;
