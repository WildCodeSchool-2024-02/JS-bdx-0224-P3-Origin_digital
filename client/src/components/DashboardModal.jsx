import "../class.css";
import { PropTypes } from "prop-types";
import FocusLock from "react-focus-lock";
import { Form } from "react-router-dom";

export default function DashboardModal({
  handleOpenModal,
  isModalOpen,
  displayClass,
  toModify,
  tags,
  handleClickAccessSelection,
  selectedAccess,
  //   handleVideoFileChange,
  //   handleImageFileChange,
  //   imageFileName,
  //   videoFileName,
  cookies,
}) {
  return (
    <FocusLock>
      <dialog
        className={` ${displayClass} absolute top-0 left-0 w-screen min-h-screen bg-[var(--primaryColor)] 
       grid-cols-[1fr,0.25fr] grid-rows-[70px,auto] items-center justify-center p-4 lg:py-12 lg:px-[15vw] 
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
        <Form
          aria-labelledby="form-title"
          className="w-full h-full flex flex-col items-center justify-evenly col-span-2 gap-1 md:gap-x-4 md:grid md:grid-cols-[1.5fr,1fr] 
          md:grid-rows-[repeat(6, minmax(0, auto))] md:gap-2 lg:gap-x-5 lg:p-4 lg:rounded-3xl lg:bg-[var(--primaryColor)]"
          onClick={(e) => e.stopPropagation()}
          method={toModify ? "PUT" : "POST"}
          action="/dashboard"
          enctype="multipart/form-data"
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
              aria-labelledby="titleLabel"
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
              aria-labelledby="descriptionLabel"
              className="w-full md:col-[1/2] bg-[var(--lightColor)] radius-4 text-sm rounded-[15px] min-h-10 p-1
            outline-none ease-linear duration-100 focus:outline focus:outline-2 focus:outline-blue-600 hover:border 
            hover:border-[var(--primaryDark)] md:min-h-16 md:text-base "
            />
          </label>
          <label
            className="w-full text-base font-nunitoBold md:col-[1/2]"
            htmlFor="category_id"
          >
            Catégories*
            <select
              className="w-full relative mt-1 min-h-10 font-nunito rounded-[15px] md:min-h-12"
              aria-label="selection de la catégorie"
              required
              name="category_id"
              id="category"
            >
              <span aria-hidden="true" className="justify-self-end ">
                ▼
              </span>
              <option value={3}>Pilates</option>
              <option value={2}>Musculation</option>
              <option value={1}>Fitness</option>
              <option value={4}>Yoga</option>
              <option value={5}>Nutrition</option>
            </select>
          </label>
          <label
            htmlFor="tags_id"
            className="w-full text-base font-nunitoBold md:col-[1/2] focus:outline focus:outline-2 focus:outline-blue-600"
          >
            Tags*
          </label>
          <select
            className="w-full bg-[var(--lightColor)] rounded-[15px] mt-[-28px] hover:border 
           hover:border-[var(--primaryDark)] py-2 px-4 focus:outline focus:outline-2 focus:outline-blue-600"
            aria-label="selection de la catégorie"
            required
            name="tags_id"
            id="category"
            multiple
          >
            <span aria-hidden="true" className="justify-self-end ">
              ▼
            </span>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
          {/* <Multiselect
            displayValue="name"
            options={tags.map((tag) => tag.name)}
            isObject={false}
            closeOnSelect
            avoidHighlightFirstOption
            hidePlaceholder
            emptyRecordMsg
            id="tags"
            name="tags"
            placeholder="Séléctionnez les tags"
            onSelect={(e) => handleChangeSelectedTags(e.target.value)}
            onRemove={(e) => handleChangeSelectedTags(e.target.value)}
            selectedValues={selectedTags.map((tag) => tag.name)}
            className="w-4/5 bg-[var(--lightColor)] rounded-[15px] mt-[-28px] hover:border 
            hover:border-[var(--primaryDark)] py-2 px-4 md:w-2/3 lg:w-1/3 focus:outline focus:outline-2 focus:outline-blue-600"
          /> */}
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
                  ? "text-blue-600 font-nunitoBold"
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
              aria-labelledby="accessLabel"
              className="theme-checkbox outline-none focus:outline focus:outline-2 focus:outline-blue-600"
              onChange={handleClickAccessSelection}
            />{" "}
            <span
              className={`text-sm md:text-base ${
                selectedAccess === true
                  ? "text-blue-600 font-nunitoBold"
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
            <legend className="w-full mb-1 text-base font-nunitoBold md:mb-2">
              Télécharger vos fichiers
            </legend>
            {/* <label
              htmlFor="videoUrl"
              className="insertField flex flex-col items-center justify-center w-full mb-2 border-black text-base duration-300
                normal-case min-h-10 hover:bg-primary-dark hover:cursor-pointer focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%] md:mb-0"
            >
              <input
                type="file"
                accept="video/mp4"
                name="video_url"
                required
                id="videoUrl"
              />
            </label> */}
            {/* <FileTrigger
              name="video_url"
              acceptedFileTypes={["video/mp4"]}
              onChange={handleVideoFileChange}
            >
              <Button
                className="insertField w-full mb-2 border-black text-base 
          normal-case min-h-10 focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%] md:mb-0"
              >
                Inserer votre vidéo
              </Button>
            </FileTrigger>
            {videoFileName && <p>{videoFileName}</p>} */}
            {/* <input
              type="file"
              accept="image/webp, image/png, image/jpg"
              name="img_url"
            /> */}
            {/* <FileTrigger
              name="img_url"
              acceptedFileTypes={["image/png", "image/webp, image/jpg"]}
              onChange={handleImageFileChange}
            >
              <Button
                className="insertField w-full border-black 
          text-base min-h-10 focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%]"
              >
                Inserer votre miniature
              </Button>
            </FileTrigger>
            {imageFileName && <p>{imageFileName}</p>} */}
          </fieldset>
          <input
            type="text"
            name="token"
            value={cookies.jwt}
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
        </Form>
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
  selectedAccess: PropTypes.string.isRequired,
  cookies: PropTypes.shape({
    jwt: PropTypes.string,
  }),
};

DashboardModal.defaultProps = {
  toModify: false,
  cookies: {},
};
