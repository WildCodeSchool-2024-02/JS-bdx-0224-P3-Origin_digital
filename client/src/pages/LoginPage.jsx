import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Subscription from "../components/Subscription";
import sendData from "../services/api.service";

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

function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const path = useLocation();
  const url = path.pathname.substring(1);
  const navigate = useNavigate();

  const connexionContent = {
    title: "CONNEXION",
    button: "SE CONNECTER",
    linkToRegister: "Pas de compte ? Inscrivez-vous",
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const data = {
      email: formValues.email,
      password: formValues.password,
    };
    const response = await sendData("/api/users/login", data, "POST");

    if (response) {
      navigate("/register");
    } else {
      console.info(response);
    }
  };

  const handleChangeInputValue = (e) => {
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
      handleChangeInputValue={handleChangeInputValue}
      fields={fields}
      formValues={formValues}
      generateFieldLabelClass={generateFieldLabelClass}
      url={url}
      connexionContent={connexionContent}
      handleSubmitLogin={handleSubmitLogin}
    />
  );
}

export default LoginPage;
