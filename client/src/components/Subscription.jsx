import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import fitnessImg from "../assets/images/training.jpg";
import "../assets/styles/form.css";

function Subscription({
  handleClickProfile,
  handleChange,
  fields,
  formValues,
  customerButton,
  professionalButton,
  generateFieldLabelClass,
  url,
  handleSubmitForm,
  connexionContent,
  registerContent,
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
          <h2 className="font-bold my-10">{url === "register" ? registerContent.title : connexionContent.title}</h2>
          {fields.map((info) => (
            <fieldset key={info.id} className="relative w-full pb-10">
              <input
                type={info.type}
                id={info.id}
                name={info.text}
                value={formValues[info.id]}
                onChange={handleChange}
                className="peer border-b-2 border-dark-color py-1 focus:border-b-2 focus:border-primary-color transition-colors focus:outline-none bg-inherit w-full"
              />
              <label
                htmlFor={info.id}
                className={generateFieldLabelClass(info.id)}
              >
                {info.text}
              </label>
            </fieldset>
          ))}
          <button className="mb-2 md:mb-10" type="button" onClick={handleSubmitForm}>
          {url === "register" ? registerContent.button : connexionContent.button}
          </button>
          <Link to={url === "register" ? "/login" : "/register"} className="mb-10">
          {url === "register" ? registerContent.linkToConnexion : connexionContent.linkToRegister}
          </Link>
        </form>
      </article>
    </section>
  );
}

Subscription.propTypes = {
  handleClickProfile: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
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
  connexionContent: PropTypes.shape(),
  registerContent: PropTypes.shape(),
};

Subscription.defaultProps = {
  customerButton: "",
  professionalButton: "",
  connexionContent: {},
  registerContent: {}
};

export default Subscription;
