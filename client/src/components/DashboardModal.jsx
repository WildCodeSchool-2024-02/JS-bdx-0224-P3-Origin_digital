import "../class.css";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { useFetcher } from "react-router-dom";

export default function DashboardModal({
  handleOpenModal,
  isModalOpen,
  displayClass,
  toModify,
  tags,
  categories,
  handleClickAccessSelection,
  selectedAccess,
  cookies,
  selectedCategory,
  handleChangeCategory,
}) {
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      handleOpenModal();
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <FocusLock>
      <dialog
        className={` ${displayClass} absolute top-0 left-0 w-screen min-h-screen bg-[var(--primaryColor)] 
       grid-cols-[1fr,0.25fr] grid-rows-[70px,auto] items-center z-10 justify-center p-4 lg:py-12 lg:px-[15vw] 
       lg:bg-[var(--blurBg)]`}
        open={isModalOpen}
        onClick={handleOpenModal}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            handleOpenModal();
          }
        }}
        role="presentation"
      >
        <h2
          type="button"
          aria-label="Titre du formulaire"
          id="form-title"
          className="w-full col-span-1 lg:pl-2"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            e.stopPropagation();
          }}
          role="presentation"
        >
          {toModify ? "Modifier la vidéo" : "Ajouter une vidéo"}
        </h2>
        <button
          className="col-span-1 place-self-start justify-self-end text-[var(--lightColor)] focus:outline focus:outline-2 focus:outline-blue-600
        bg-[var(--primaryDark)] hover:text-[var(--darkColor)] hover:bg-[var(--primaryLight)]"
          onClick={handleOpenModal}
          type="button"
          aria-label="fermer la modale"
        >
          X
        </button>
        <fetcher.Form
          aria-labelledby="form-title"
          className="w-full h-full flex flex-col items-center justify-evenly col-span-2 gap-1 md:gap-x-4 md:grid md:grid-cols-[1.5fr,1fr] 
          md:grid-rows-[repeat(6, minmax(0, auto))] md:gap-2 lg:gap-x-5 lg:p-4 lg:rounded-3xl lg:bg-[var(--primaryColor)]"
          onClick={(e) => e.stopPropagation()}
          method={toModify ? "PUT" : "POST"}
          action="/dashboard"
          encType="multipart/form-data"
          id="modalForm"
        >
          <label
            className="w-full mb-1 text-base font-nunitoBold"
            htmlFor="title"
          >
            Titre*
            <input
              className="w-full col-[1/2] bg-[var(--lightColor)] text-sm min-h-10 rounded-xl p-1 outline-none ease-linear duration-100 
              hover:border hover:border-[var(--primaryDark)] focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-12 md:text-base"
              id="title"
              name="title"
              type="text"
              required
            />
          </label>
          <label
            className="w-full mb-1 text-base font-nunitoBold"
            htmlFor="description"
          >
            Description*
            <textarea
              label="Description"
              name="description"
              id="description"
              className="w-full md:col-[1/2] bg-[var(--lightColor)] radius-4 text-sm rounded-[15px] min-h-10 p-1
            outline-none ease-linear duration-100 focus:outline focus:outline-2 focus:outline-blue-600 hover:border 
            hover:border-[var(--primaryDark)] md:min-h-16 md:text-base "
            />
          </label>
          <label htmlFor="duration" className=" text-base">
            Durée de la vidéo (format HH:MM:SS)
            <input
              id="duration"
              name="duration"
              type="text"
              required
              defaultValue="00:00:00"
              pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
              title="Write a duration in the format hh:mm:ss"
              className="w-full col-[1/2] bg-[var(--lightColor)] text-sm min-h-10 rounded-xl p-1 outline-none ease-linear duration-100 
              hover:border hover:border-[var(--primaryDark)] focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-12 md:text-base"
            />
          </label>
          <label
            className="w-full text-base font-nunitoBold md:col-[1/2] "
            htmlFor="category_id"
          >
            Catégories*
            <select
              className="w-full relative mt-1 min-h-10 font-nunito rounded-[15px] md:min-h-12 duration-300 focus:outline focus:outline-2 focus:outline-blue-600 hover:border 
              hover:border-[var(--primaryDark)]"
              required
              name="category_id"
              id="category_id"
              value={selectedCategory}
              onChange={handleChangeCategory}
            >
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="tags_id"
            className="w-full text-base font-nunitoBold md:col-[1/2]"
          >
            Tags*
            <select
              className="w-full relative mt-1 min-h-10 font-nunito rounded-[15px] md:min-h-12 duration-300 focus:outline focus:outline-2 focus:outline-blue-600 hover:border 
              hover:border-[var(--primaryDark)]"
              required
              name="tags_id"
              id="tags_id"
              multiple
            >
              {tags &&
                tags.map(
                  (tag) =>
                    tag.category_id === selectedCategory && (
                      <option key={tag.id} value={tag.id}>
                        {tag.name}
                      </option>
                    )
                )}
            </select>
          </label>
          <label
            htmlFor="access"
            className="w-full flex flex-wrap gap-2 items-center outline-none hover:cursor-pointer focus:outline focus:outline-2 focus:outline-blue-600 md:col-[1/2]"
          >
            <span className="w-full font-nunitoBold" id="accessLabel">
              Accès
            </span>
            <span
              className={`text-sm md:text-base ${
                selectedAccess === false
                  ? "text-primary-dark font-nunitoBold"
                  : "font-light"
              }`}
            >
              Public
            </span>
            <input
              name="access"
              value={selectedAccess}
              type="checkbox"
              id="access"
              className="theme-checkbox outline-none focus:outline border focus:outline-2 focus:outline-blue-600
              hover:border-[var(--primaryDark)]"
              onChange={handleClickAccessSelection}
            />{" "}
            <span
              className={`text-sm md:text-base ${
                selectedAccess === true
                  ? "text-primary-dark font-nunitoBold"
                  : "font-light"
              }`}
            >
              Abonnés
            </span>
          </label>
          <fieldset
            className="w-full flex flex-wrap items-center justify-center gap-3 md:justify-evenly md:gap-5 
          md:flex-col md:col-[2/-1] md:row-[1/6] md:h-[90%]"
          >
            <legend className="w-full mb-1 text-base md:text-lg font-bold font-nunitoBold md:mb-2">
              Télécharger vos fichiers
            </legend>
            <label
              htmlFor="video_url"
              className="insertField flex flex-col gap-4 items-start p-4 font-semibold justify-center w-full mb-2 border-black text-base duration-300
                normal-case min-h-10 hover:bg-primary-dark hover:cursor-pointer focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%] md:mb-0"
            >
              Ajouter votre vidéo
              <input
                type="file"
                accept="video/mp4"
                name="video_url"
                required
                id="video_url"
                className="file:mr-2 font-normal file:border-none file:bg-primary-dark file:px-2 file:py-3 file:cursor-pointer file:text-light-color"
              />
            </label>
            <label
              htmlFor="img_url"
              className="insertField gap-4 flex flex-col items-start p-4 justify-center w-full mb-2 border-black text-base duration-300
                normal-case min-h-10 hover:bg-primary-dark hover:cursor-pointer focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%] md:mb-0"
            >
              Ajouter votre miniature
              <input
                type="file"
                accept="image/*"
                name="img_url"
                id="img_url"
                className="file:mr-2 file:border-none file:bg-primary-dark file:px-2 file:py-3 file:cursor-pointer file:text-light-color"
              />
            </label>
          </fieldset>
          <input
            aria-hidden
            type="text"
            name="token"
            defaultValue={cookies.jwt}
            id="token"
            className="hidden"
          />
          <button
            type="submit"
            className="w-full min-h-10 md:min-h-14 text-[var(--lightColor)] bg-[var(--primaryDark)] outline-none
            hover:text-[var(--darkColor)] hover:bg-[var(--secondaryColor)] focus:outline focus:outline-2 focus:outline-blue-600 md:col-[1/-1]"
          >
            {toModify ? "Modifier" : "Ajouter"}
          </button>
        </fetcher.Form>
      </dialog>
    </FocusLock>
  );
}

DashboardModal.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  displayClass: PropTypes.string.isRequired,
  toModify: PropTypes.bool,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleClickAccessSelection: PropTypes.func.isRequired,
  selectedAccess: PropTypes.bool.isRequired,
  cookies: PropTypes.shape({
    jwt: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.number.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
};

DashboardModal.defaultProps = {
  toModify: false,
  cookies: {},
};
