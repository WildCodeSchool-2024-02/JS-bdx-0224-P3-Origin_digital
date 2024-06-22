import PropTypes from 'prop-types';
import fitnessImg from "../assets/images/training.jpg";
import "../assets/styles/form.css"

function Subscription({
  handleClickCustomer,
  handleClickProfessional,
  handleChange,
  fields,
  formValues,
  customerButton,
  professionalButton,
  generateFieldLabelClass,
}) {
  return (
    <section className="flex justify-center items-center gap-10 ">
      <figure className="hidden lg:flex items-center justify-center">
        <img
          src={fitnessImg}
          alt="sportifs"
          className="img-shadow rounded-xl mb-4 object-cover h-96 "
        />
      </figure>
      <article className="flex flex-col items-center w-96 aspect-[6/10]  ">
        <ul className="flex items-center text-center w-full h-14 rounded-t-lg">
          <li className="font-bold h-full m-0 flex-1 flex justify-center items-center">
            <button
              onClick={handleClickCustomer}
              className={customerButton}
              type="button"
            >
              PARTICULIER
            </button>
          </li>
          <li className="font-bold h-full m-0 flex-1 flex justify-center items-center">
            <button
              onClick={handleClickProfessional}
              className={professionalButton}
              type="button"
            >
              PROFESSIONNEL
            </button>
          </li>
        </ul>
        <form className="flex flex-col items-center w-full h-full px-4 border border-pc rounded-b-lg">
          <h2 className="font-bold my-10">INSCRIPTION</h2>
          {fields.map((info) => (
            <fieldset key={info.id} className="relative w-full pb-10">
              <input
                type={info.type}
                id={info.id}
                name={info.text}
                value={formValues[info.id]}
                onChange={handleChange}
                className="border-b-2 border-dc py-1 focus:border-b-2 focus:border-pc transition-colors focus:outline-none bg-inherit w-full"
              />
              <label
                htmlFor={info.id}
                className={generateFieldLabelClass(info.id)}
              >
                {info.text}
              </label>
            </fieldset>
          ))}
          <button
            className="mb-2 md:mb-28"
            type="button"
          >
            CRÉER VOTRE COMPTE
          </button>
        </form>
      </article>
    </section>
  );
}

Subscription.propTypes = {
  handleClickCustomer: PropTypes.func.isRequired,
  handleClickProfessional: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  formValues: PropTypes.string.isRequired,
  customerButton: PropTypes.string,
  professionalButton: PropTypes.string,
  generateFieldLabelClass: PropTypes.func.isRequired,
};

Subscription.defaultProps = {
  customerButton: '',
  professionalButton: '',
};

export default Subscription;