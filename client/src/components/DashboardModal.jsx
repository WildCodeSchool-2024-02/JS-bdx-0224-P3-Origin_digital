import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  FileTrigger,
} from "react-aria-components";
import "../class.css";
import { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import FocusLock from "react-focus-lock";
import Multiselect from "multiselect-react-dropdown";

export default function DashboardModal({
  handleOpenModal,
  isModalOpen,
  displayClass,
  toModify,
  tags,
}) {
  const [selectedAccess, setSelectedAccess] = useState("Public");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const ref = useRef();

  const handleClickAccessSelection = () => {
    setSelectedAccess(selectedAccess === "Public" ? "Abonnés" : "Public");
  };

  const handleChangeSelectedTags = (selectedList) => {
    setSelectedTags(selectedList);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <FocusLock>
      <dialog
        className={` ${displayClass} absolute top-0 left-0 w-screen min-h-screen bg-[var(--primaryColor)] 
       grid-cols-[1fr,0.25fr] grid-rows-[70px,auto] items-center justify-center p-4 lg:py-12 lg:px-[25vw] 
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
        >
          <TextField
            name="title"
            type="text"
            isRequired
            necessityIndicator="icon"
            className="w-full col-[1/2]"
          >
            <Label className="block mb-1 text-base font-nunitoBold">
              Titre*
            </Label>
            <Input
              className="bg-[var(--lightColor)] text-sm w-full min-h-10 rounded-xl p-1 outline-none ease-linear duration-100 
              hover:border hover:border-[var(--primaryDark)] focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-12 md:text-base"
            />
            <FieldError className="text-sm pl-2" />
          </TextField>
          <TextField
            className="w-full md:col-[1/2]"
            isRequired
            necessityIndicator="icon"
          >
            <Label className="block mb-1 text-base font-nunitoBold">
              Description*
            </Label>
            <TextArea
              label="Description"
              name="description"
              className="bg-[var(--lightColor)] w-full radius-4 text-sm rounded-[15px] min-h-10 p-1
            outline-none ease-linear duration-100 focus:outline focus:outline-2 focus:outline-blue-600 hover:border 
            hover:border-[var(--primaryDark)] md:min-h-16 md:text-base "
            />
            <FieldError className="text-sm pl-2" />
          </TextField>
          <Label className="w-full text-base font-nunitoBold md:col-[1/2]">
            Catégories*
            <Select
              className="w-full relative mt-1 min-h-10 font-nunito md:min-h-12"
              aria-label="selection de tag"
            >
              <Button
                className="w-full bg-[var(--lightColor)] flex justify-between items-center min-h-10 
                focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-12"
              >
                <SelectValue placeholder="Choisissez une catégorie" />
                <span aria-hidden="true" className="justify-self-end ">
                  ▼
                </span>
              </Button>

              <Popover
                className="w-4/5 bg-[var(--lightColor)] border border-[var(--darkColor)] rounded-[15px] 
              py-2 px-4 md:w-2/3 lg:w-1/3 "
              >
                <ListBox
                  aria-label="selection de tag"
                  selectionMode="multiple"
                  selectedKeys={selectedCategory}
                  onSelectionChange={setSelectedCategory}
                >
                  <ListBoxItem>Pilates</ListBoxItem>
                  <ListBoxItem>Musculation</ListBoxItem>
                  <ListBoxItem>Fitness</ListBoxItem>
                  <ListBoxItem>Yoga</ListBoxItem>
                  <ListBoxItem>Nutrition</ListBoxItem>
                </ListBox>
              </Popover>
            </Select>
          </Label>
          <Label className="w-full text-base font-nunitoBold md:col-[1/2]">
            Tags*
            <Multiselect
              options={tags.map((tag) => tag.name)}
              isObject={false}
              avoidHighlightFirstOption
              onSelect={(e) => handleChangeSelectedTags(e.target.value)}
              onRemove={(e) => handleChangeSelectedTags(e.target.value)}
              selectedValues={selectedTags.map((tag) => tag.name)}
              ref={ref}
              className="w-4/5 bg-[var(--lightColor)]  border border-[var(--darkColor)] rounded-[15px] 
              py-2 px-4 md:w-2/3 lg:w-1/3"
            />
            {/* <Select
              className="w-full mt-1 font-nunito"
              aria-label="selection de tag"
            >
              <Button
                className="w-full bg-[var(--lightColor)] flex justify-between items-center min-h-10 md:min-h-12 
              focus:outline focus:outline-2 focus:outline-blue-600"
              >
                <SelectValue placeholder="Choisissez une catégorie" />
                <span aria-hidden="true" className="justify-self-end">
                  ▼
                </span>
              </Button>
              <Popover
                className="w-4/5 bg-[var(--lightColor)]  border border-[var(--darkColor)] rounded-[15px] 
              py-2 px-4 md:w-2/3 lg:w-1/3"
              >
                <ListBox
                  aria-label="selection de tag"
                  selectionMode="multiple"
                  selectedKeys={selectedTags}
                  onSelectionChange={setSelectedTags}
                >
                  <ListBoxItem>Aardvark</ListBoxItem>
                  <ListBoxItem>Cat</ListBoxItem>
                  <ListBoxItem>Dog</ListBoxItem>
                  <ListBoxItem>Kangaroo</ListBoxItem>
                  <ListBoxItem>Panda</ListBoxItem>
                  <ListBoxItem>Snake</ListBoxItem>
                </ListBox>
              </Popover>
            </Select> */}
          </Label>
          <Label className="w-full flex flex-wrap gap-2 items-center outline-none focus:outline focus:outline-2 focus:outline-blue-600 md:col-[1/2]">
            <span className="w-full font-nunitoBold">Accès</span>
            <span
              className={`text-sm md:text-base ${
                selectedAccess === "Public"
                  ? "text-blue-600 font-nunitoBold"
                  : "font-light"
              }`}
            >
              Public
            </span>
            <input
              value={selectedAccess}
              type="checkbox"
              className="theme-checkbox outline-none focus:outline focus:outline-2 focus:outline-blue-600"
              onChange={handleClickAccessSelection}
            />{" "}
            <span
              className={`text-sm md:text-base ${
                selectedAccess === "Abonnés"
                  ? "text-blue-600 font-nunitoBold"
                  : "font-light"
              }`}
            >
              Abonnés
            </span>
          </Label>
          <fieldset
            className="w-full flex flex-wrap items-center justify-center gap-3 md:justify-evenly md:gap-5 
          md:flex-col md:col-[2/-1] md:row-[1/6] md:h-[90%]"
          >
            <legend className="w-full mb-1 text-base font-nunitoBold md:mb-2">
              Télécharger vos fichiers
            </legend>
            <FileTrigger name="video_url" acceptedFileTypes={["video/mp4"]}>
              <Button
                className="insertField w-full mb-2 border-black text-base 
          normal-case min-h-10 focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%] md:mb-0"
              >
                Inserer votre vidéo
              </Button>
            </FileTrigger>
            <FileTrigger
              name="preview_url"
              acceptedFileTypes={["image/png", "image/webp"]}
            >
              <Button
                className="insertField w-full border-black 
          text-base min-h-10 focus:outline focus:outline-2 focus:outline-blue-600 md:min-h-14 md:h-[40%]"
              >
                Inserer votre miniature
              </Button>
            </FileTrigger>
          </fieldset>
          <Button
            type="submit"
            className="w-full min-h-10 md:min-h-14 text-[var(--lightColor)] bg-[var(--primaryDark)] outline-none
            hover:text-[var(--darkColor)] hover:bg-[var(--secondaryColor)] focus:outline focus:outline-2 focus:outline-blue-600 md:col-[1/-1]"
          >
            {toModify ? "Modifier" : "Ajouter"}
          </Button>
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
};

DashboardModal.defaultProps = {
  toModify: false,
};
