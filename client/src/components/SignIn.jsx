import PropTypes from 'prop-types';
import fitnessImg from "../assets/images/training.jpg";
import "../assets/styles/form.css"

function SignIn({
  handleChange,
  fields,
  formValues,
  generateFieldLabelClass,
}) {
  return (
    <section className="flex justify-center items-center gap-10 ">
      <figure className="hidden lg:flex justify-center">
        <img
          src={fitnessImg}
          alt="sportifs"
          className="img-shadow rounded-xl mb-4 object-cover h-96 "
        />
      </figure>
      <article className="w-96">
        <form className="flex flex-col items-center w-full h-3/5 px-4 border border-primary-color rounded-lg">
          <h2 className="font-bold my-10">CONNECTION</h2>
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
          <button
            className="mb-2 md:mb-28"
            type="button"
          >
            VOUS CONNECTER
          </button>
        </form>
      </article>
    </section>
  );
}

SignIn.propTypes = {
  handleChange: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  formValues: PropTypes.string.isRequired,
  generateFieldLabelClass: PropTypes.func.isRequired,
};

export default SignIn;