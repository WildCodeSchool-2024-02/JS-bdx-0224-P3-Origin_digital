import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import Subscription from "../components/Subscription";
import sendData from "../services/api.service";

const loginContent = {
  title: "CONNEXION",
  button: "SE CONNECTER",
  linkToRegister: "Pas de compte ? Inscrivez-vous",
};

function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const path = useLocation();
  const url = path.pathname.substring(1);
  const navigate = useNavigate();
  const emailRef = useRef();

  const fields = [
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
    },
  ];

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const data = {
      email: formValues.email,
      password: formValues.password,
    };
    const response = await sendData("/api/auth", data, "POST");

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
      loginContent={loginContent}
      handleSubmitLogin={handleSubmitLogin}
    />
  );
}

export default LoginPage;
