import { Link, Form } from "react-router-dom";
import PropTypes from "prop-types";
import fitnessImg from "../assets/images/training.jpg";
import "../assets/styles/form.css";

function Subscription({
  handleClickProfile,
  handleChangeInputValue,
  fields,
  formValues,
  customerButton,
  professionalButton,
  generateFieldLabelClass,
  url,
  loginContent,
  registerContent,
  actionData,
}) {
  return (
    <section className="flex justify-center items-center gap-10 ">
      <img
        src={fitnessImg}
        alt="sportifs"
        className="hidden lg:block img-shadow rounded-xl mb-4 object-cover h-96 "
      />
      <article className="flex flex-col items-center w-96 aspect-[6/10]  ">
        {url === "register" && (
          <ul className="flex items-center text-center w-full h-14 rounded-t-lg">
            <li className="containBtnForm">
              <button
                onClick={() => handleClickProfile(false)}
                className={customerButton}
                type="button"
              >
                PARTICULIER
              </button>
            </li>
            <li className="containBtnForm">
              <button
                onClick={() => handleClickProfile(true)}
                className={professionalButton}
                type="button"
              >
                PROFESSIONNEL
              </button>
            </li>
          </ul>
        )}

        <Form
          className="flex flex-col items-center w-full h-full px-4 border border-primary-color rounded-b-lg"
          method="POST"
          action={url === "register" ? "/register" : "/login"}
        >
          <h2 className="font-bold my-10">
            {url === "register" ? registerContent.title : loginContent.title}
          </h2>
          {fields.map((field) => (
            <fieldset key={field.id} className="relative w-full pb-10">
              <input
                type={field.type}
                id={field.id}
                ref={field.ref}
                name={field.id}
                value={formValues[field.id]}
                onChange={handleChangeInputValue}
                pattern={field.pattern}
                required
                className="peer border-b-2 border-dark-color py-1transition-colors bg-inherit w-full
                 focus:border-primary-color focus:outline-none focus:border-b-2"
              />
              <label
                htmlFor={field.id}
                className={generateFieldLabelClass(field.id)}
              >
                {field.text}
              </label>
            </fieldset>
          ))}
          {url === "login" && actionData === 422 && (
            <p className="text-red-500 font-medium text-sm mb-2 mt-[-0.5rem]">
              Mot de passe / Email incorrect
            </p>
          )}
          <button className="mb-2 md:mb-10" type="submit">
            {url === "register" ? registerContent.button : loginContent.button}
          </button>
          <Link
            to={url === "register" ? "/login" : "/register"}
            className="mb-10"
          >
            {url === "register"
              ? registerContent.linkToLogin
              : loginContent.linkToRegister}
          </Link>
        </Form>
      </article>
    </section>
  );
}

Subscription.propTypes = {
  handleClickProfile: PropTypes.func,
  handleChangeInputValue: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  formValues: PropTypes.shape().isRequired,
  customerButton: PropTypes.string,
  professionalButton: PropTypes.string,
  generateFieldLabelClass: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  loginContent: PropTypes.shape(),
  registerContent: PropTypes.shape(),
  actionData: PropTypes.func,
};

Subscription.defaultProps = {
  handleClickProfile: () => {},
  customerButton: "",
  professionalButton: "",
  loginContent: {},
  registerContent: {},
  actionData: undefined,
};


export default Subscription;
