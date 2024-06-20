import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
  RadioGroup,
  Radio,
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  FileTrigger,
} from "react-aria-components";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function DashboardModal({
  handleOpenModal,
  isModalOpen,
  displayClass,
  toModify,
}) {
  const [selectedAccess, setSelectedAccess] = useState("Public");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleClickAccessSelection = () => {
    setSelectedAccess(selectedAccess === "Public" ? "Abonné" : "Public");
  };

  return (
    <dialog
      className={` ${displayClass} absolute top-0 left-0 w-screen h-screen bg-[var(--primaryColor)] 
       grid-cols-[1fr,0.25fr] grid-rows-[70px,auto] items-center justify-center p-4 md:px-32 lg:py-16 lg:px-[25vw] lg:bg-[var(--blurBg)]`}
      open={isModalOpen}
    >
      <h2 id="form-title" className="w-full col-span-1 lg:pl-2">
        {toModify ? "Modifier la vidéo" : "Ajouter une vidéo"}
      </h2>
      <button
        className="bg-none col-span-1 place-self-start justify-self-end text-[var(--lightColor)] 
        bg-[var(--primaryDark)] hover:text-[var(--darkColor)] hover:bg-[var(--secondaryColor)]"
        onClick={handleOpenModal}
        type="button"
        aria-label="fermer la modale"
      >
        X
      </button>
      <Form
        aria-labelledby="form-title"
        className="w-full h-full flex flex-col items-center justify-evenly col-span-2 gap-1 
        md:gap-2 lg:gap-6 lg:p-4 lg:rounded-3xl lg:bg-[var(--primaryColor)]"
      >
        <FileTrigger name="video_url" acceptedFileTypes={["video/mp4"]}>
          <Button
            className="bg-[var(--primaryColor)] w-full border-dashed border border-black text-base 
          normal-case min-h-11 md:min-h-12"
          >
            Enregistrer votre vidéo
          </Button>
        </FileTrigger>
        <FileTrigger
          name="preview_url"
          acceptedFileTypes={["image/png", "image/webp"]}
        >
          <Button
            className="bg-[var(--primaryColor)] w-full border-dashed border border-black 
          text-base min-h-11 md:min-h-12"
          >
            Enregistrer votre miniature
          </Button>
        </FileTrigger>
        <TextField
          name="title"
          type="text"
          isRequired
          necessityIndicator="icon"
          className="w-full"
        >
          <Label className="block mb-1 text-base">Titre*</Label>
          <Input
            className="bg-[var(--lightColor)] w-full min-h-11 rounded-xl p-1 outline-none focus:border 
          focus:border-[var(--primaryDark)] md:min-12"
          />
          <FieldError />
        </TextField>
        <TextField className="w-full" isRequired necessityIndicator="icon">
          <Label className="block mb-1 text-base">Description*</Label>
          <TextArea
            label="Description"
            name="description"
            className="bg-[var(--lightColor)] w-full radius-4 rounded-[15px] min-h-12 p-1
            outline-none focus:border focus:border-[var(--primaryDark)] md:min-h-16"
          />
        </TextField>
        <Label className="w-full text-base">
          Catégories*
          <Select
            className="w-full mt-1 min-h-11 md:min-h-12"
            aria-label="selection de tag"
          >
            <Button className="w-full bg-[var(--lightColor)] flex justify-between items-center min-h-11 md:min-h-12">
              <SelectValue placeholder="Choisissez une catégorie" />
              <span aria-hidden="true" className="justify-self-end">
                ▼
              </span>
            </Button>
            <Popover className="w-4/5 bg-[var(--lightColor)] border border-[var(--darkColor)] rounded-[15px] py-2 px-4">
              <ListBox
                aria-label="selection de tag"
                selectionMode="multiple"
                selectedKeys={selectedTags}
                onSelectionChange={setSelectedTags}
              >
                <ListBoxItem className="hover:bg-slate-200 cursor-pointer w-full p-1 rounded-md">
                  Aardvark
                </ListBoxItem>
                <ListBoxItem>Cat</ListBoxItem>
                <ListBoxItem>Dog</ListBoxItem>
                <ListBoxItem>Kangaroo</ListBoxItem>
                <ListBoxItem>Panda</ListBoxItem>
                <ListBoxItem>Snake</ListBoxItem>
              </ListBox>
            </Popover>
          </Select>
        </Label>
        <Label className="w-full text-base">
          Tags*
          <Select className="w-full mt-1" aria-label="selection de tag">
            <Button className="w-full bg-[var(--lightColor)] flex justify-between items-center min-h-11 md:min-h-12">
              <SelectValue placeholder="Choisissez une catégorie" />
              <span aria-hidden="true" className="justify-self-end">
                ▼
              </span>
            </Button>
            <Popover className="w-4/5 bg-[var(--lightColor)]  border border-[var(--darkColor)] rounded-[15px] py-2 px-4">
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
          </Select>
        </Label>
        <Label className="w-full text-base">
          Accès
          <RadioGroup
            necessity
            indicator
            label="Accès"
            orientation="horizontal"
            aria-label="Favorite pet"
            onChange={handleClickAccessSelection}
            value={selectedAccess}
          >
            <Radio value="Public" className="rounded-lg p-4">
              Public
            </Radio>
            <Radio value="Abonné" className="rounded-lg p-4">
              Abonné
            </Radio>
          </RadioGroup>
        </Label>
        <Button
          type="submit"
          className="w-full min-h-11 md:min-h-14 text-[var(--lightColor)] bg-[var(--primaryDark)] hover:text-[var(--darkColor)] hover:bg-[var(--secondaryColor)]"
        >
          {toModify ? "Modifier" : "Ajouter"}
        </Button>
      </Form>
    </dialog>
  );
}

DashboardModal.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  displayClass: PropTypes.string.isRequired,
  toModify: PropTypes.bool,
};

DashboardModal.defaultProps = {
  toModify: false,
};
