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
  const connectionContent = {
    title: "CONNEXION",
    button: "SE CONNECTER",
    linkToRegister: "Pas de compte ? Inscrivez-vous"
  };
  const navigate = useNavigate();

  const path = useLocation();

  const url = path.pathname.substring(1)

  const handleChangeInputValue = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const generateFieldLabelClass = (id) =>
    `label ${formValues[id].length > 0 ? "active" : ""}`;

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const data = {
      email: formValues.email,
      password: formValues.password
    };

    const response = await sendData("/auth/login", data, "POST");
    if (response) {
      navigate("/");
    } else {
      console.info(response);
    }
  };

  return (
      <Subscription 
      handleChangeInputValue={handleChangeInputValue}
      handleSubmitForm={handleSubmitForm}
      fields={fields}
      formValues={formValues}
      generateFieldLabelClass={generateFieldLabelClass}
      url={url}
      connectionContent={connectionContent}
      />
  );
}

export default LoginPage;
