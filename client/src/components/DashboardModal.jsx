import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
  Switch,
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  FileTrigger,
} from "react-aria-components";
import { useState } from "react";
import { PropTypes } from "prop-types";
import "../assets/styles/modal.css";

export default function DashboardModal({
  handleOpenModal,
  isModalOpen,
  displayClass,
  toModify,
}) {
  const [selectedAccess, setSelectedAccess] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <dialog
      className={` ${displayClass} absolute top-0 left-0 w-screen h-screen bg-[var(--blurBg)] 
       grid-cols-[1fr,0.25fr] grid-rows-[100px,auto] items-center justify-center p-4 md:px-32 lg:py-16 lg:px-64`}
      open={isModalOpen}
    >
      <h2 id="form-title" className="w-full col-span-1">
        {toModify ? "Modifier la vidéo" : "Ajouter une vidéo"}
      </h2>
      <button
        className="bg-none col-span-1 place-self-start justify-self-end"
        onClick={handleOpenModal}
        type="button"
        aria-label="fermer la modale"
      >
        X
      </button>
      <Form
        aria-labelledby="form-title"
        className="w-full h-full flex flex-col items-center justify-evenly col-span-2"
      >
        <FileTrigger name="video_url" acceptedFileTypes={["video/mp4"]}>
          <Button className="bg-[var(--primaryColor)] w-full border-dashed border border-black text-base normal-case">
            Enregistrer votre vidéo
          </Button>
        </FileTrigger>
        <FileTrigger
          name="preview_url"
          acceptedFileTypes={["image/png", "image/webp"]}
        >
          <Button className="bg-[var(--primaryColor)] w-full border-dashed border border-black text-base">
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
          <Label>Titre</Label>
          <Input className="bg-[var(--lightColor)] w-full" />
          <FieldError />
        </TextField>
        <TextField className="w-full" isRequired necessityIndicator="icon">
          <Label>Description</Label>
          <TextArea
            label="Description"
            name="description"
            className="bg-[var(--lightColor)] w-full radius-4 rounded-[15px] min-h-16 p-1
            focus:outline-none focus:border-2 focus:border-[var(--primaryColor)] md:min-h-20"
          />
        </TextField>
        <Label>Tags</Label>
        <Select className="w-full" aria-label="selection de tag">
          <Button className="w-full bg-[var(--lightColor)] flex justify-between">
            <SelectValue />
            <span aria-hidden="true" className="justify-self-end">
              ▼
            </span>
          </Button>
          <Popover className="w-4/5 bg-[var(--lightColor)] rounded-[15px] py-2 px-4">
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
        <Switch
          name="access"
          isSelected={selectedAccess}
          onChange={setSelectedAccess}
          className=".react-aria-Switch"
        >
          {selectedAccess ? "Abonné" : "Public"}
        </Switch>
        <Button type="submit" className="w-full bg-[var(--lightColor)]">
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
