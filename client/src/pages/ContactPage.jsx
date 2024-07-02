import { useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true); 

    event.target.reset();
  };

  return (
    <>
      <h2 className="flex justify-center my-5">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-auto mb-5 bg-primary-light rounded-lg max-w-3xl"
      >
        <label className="labelContact" htmlFor="name">
          Nom
        </label>
        <input
          placeholder="Insérez votre nom ici"
          className="inputContact"
          type="text"
          minLength="5"
          id="name"
          required
        />
        <label className="labelContact" htmlFor="email">
          Email
        </label>
        <input
          placeholder="Insérez votre email ici"
          className="inputContact"
          type="email"
          id="email"
          pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          required
        />
        <label className="labelContact" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Ecrivez votre commentaire !"
          className="rounded-lg m-2 p-4"
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        />
        <button
          className="contactButton w-20 h-10 m-2 mb-4 p-1 text-xs mx-auto w-28 h-10 text-base"
          type="submit"
          aria-label="submit"
        >
          Submit
        </button>
      </form>
      {isSubmitted && (
        <>
          <p className="text-center text-primary-dark mb-2">
            Votre message a été envoyé avec succès!
          </p>
          <p className="text-center text-primary-dark mb-8">
            Notre équipe s'engage à vous répondre dans les 72 prochaines heures.
          </p>
        </>
      )}
    </>
  );
}

export default Contact;

