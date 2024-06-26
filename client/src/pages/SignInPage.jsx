import { useState } from "react";
import SignIn from "../components/SignIn";

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const generateFieldLabelClass = (id) =>
    `label ${formValues[id].length > 0 ? "active" : ""}`;

  return (
    <SignIn
      handleChange={handleChange}
      fields={fields}
      formValues={formValues}
      generateFieldLabelClass={generateFieldLabelClass}
    />
  );
}

export default SignInPage;
