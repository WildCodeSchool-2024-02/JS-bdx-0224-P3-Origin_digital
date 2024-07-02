function ContactPage() {
  return (
    <>
      <h2 className="">Contact</h2>
      <form className="flex flex-col items-center mb-28 bg-primary-light">
        <label className="labelContact " htmlFor="name">
          Name
        </label>
        <input
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
          className="textareaContact"
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
        />
        <button className="contactButton" type="submit" aria-label="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactPage;
