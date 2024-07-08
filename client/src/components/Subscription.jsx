import { Link } from "react-router-dom";
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
  handleSubmitRegister,
  loginContent,
  registerContent,
  handleSubmitLogin,
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

        <form
          className="flex flex-col items-center w-full h-full px-4 border border-primary-color rounded-b-lg"
          method="POST"
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
                name={field.text}
                value={formValues[field.id]}
                onChange={handleChangeInputValue}
                pattern={field.id === "email" ? ".+@example.com" : undefined}
                minLength={field.id === "password" ? 8 : 0}
                className="peer border-b-2 border-dark-color py-1transition-colors  bg-inherit w-full
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
          <button
            className="mb-2 md:mb-10"
            type="button"
            onClick={
              url === "register" ? handleSubmitRegister : handleSubmitLogin
            }
          >
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
        </form>
      </article>
    </section>
  );
}

Subscription.propTypes = {
  handleClickProfile: PropTypes.func,
  handleChangeInputValue: PropTypes.func.isRequired,
  handleSubmitRegister: PropTypes.func,
  handleSubmitLogin: PropTypes.func,
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
};

Subscription.defaultProps = {
  handleClickProfile: () => {},
  handleSubmitRegister: () => {},
  handleSubmitLogin: () => {},
  customerButton: "",
  professionalButton: "",
  loginContent: {},
  registerContent: {},
};

export default Subscription;
