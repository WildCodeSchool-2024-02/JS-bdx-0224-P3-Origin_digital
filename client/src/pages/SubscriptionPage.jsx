import { useState, useEffect } from "react";
import Subscription from "../components/Subscription";

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
      siret: "",
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

  const customerButton = `w-full h-full p-0 rounded-none rounded-tl-lg cursor-pointer ${
    fields.length === textLabel.length ? "bg-pcd text-lc" : "bg-pc"
  }`;
  const professionalButton = `w-full h-full p-0 rounded-none rounded-tr-lg cursor-pointer ${
    fields.length > textLabel.length ? "bg-pcd text-lc" : "bg-pc"
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
      textLabel={textLabel}
      customerButton={customerButton}
      professionalButton={professionalButton}
      generateFieldLabelClass={generateFieldLabelClass}
    />
  );
}

export default SubscriptionPage;
