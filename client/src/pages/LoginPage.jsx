import { useCookies } from "react-cookie";
import { useActionData, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Subscription from "../components/Subscription";

const loginContent = {
  title: "CONNEXION",
  button: "SE CONNECTER",
  linkToRegister: "Pas de compte ? Inscrivez-vous",
};

function LoginPage( ) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const path = useLocation();
  const url = path.pathname.substring(1);
  const emailRef = useRef();
  const actionData = useActionData();
  const [, setCookie ] = useCookies();

  useEffect(()=> {
    if(actionData && actionData.token) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      setCookie("jwt", actionData.token)
      window.location.href= "/";

    }
  }, [actionData, setCookie])
  

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
      actionData={actionData}
    />
  );
}

export default LoginPage;
