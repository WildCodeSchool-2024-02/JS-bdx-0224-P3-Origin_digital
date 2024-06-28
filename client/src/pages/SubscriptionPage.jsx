import { useState } from "react";
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

  const handleClickProfile = (isProfessional=false) => {
    if (isProfessional) {
      setFields([...textLabel, siret]);
    } else {
      setFields(textLabel);
    }
    setFormValues(emptyFields);
  };

  const handleChange = (e) => {
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
      handleChange={handleChange}
      fields={fields}
      formValues={formValues}
      customerButton={customerButton}
      professionalButton={professionalButton}
      generateFieldLabelClass={generateFieldLabelClass}
    />
  );
}

export default SubscriptionPage;
