import { useLocation } from "react-router-dom";
import { useState } from "react";
import Subscription from "../components/Subscription";

const fields = [
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

function SignInPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const connexionContent = {
    title: "CONNEXION",
    button: "SE CONNECTER",
    linkToRegister: "Pas de compte ? Inscrivez-vous"
  };

  const path = useLocation();

  const url = path.pathname.substring(1)

  const handleChangeScribe = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const generateFieldLabelClass = (id) =>
    `label ${formValues[id].length > 0 ? "active" : ""}`;

  return (
      <Subscription 
      handleChangScribe={handleChangeScribe}
      fields={fields}
      formValues={formValues}
      generateFieldLabelClass={generateFieldLabelClass}
      url={url}
      connexionContent={connexionContent}
      />
  );
}

export default SignInPage;
