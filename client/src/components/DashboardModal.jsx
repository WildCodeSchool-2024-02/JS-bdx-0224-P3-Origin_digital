import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
  Switch,
  FileTrigger,
} from "react-aria-components";
import { useState } from "react";
import { PropTypes } from "prop-types";

export default function DashboardModal({ setIsModalOpen, title }) {
  const [selected, setSelection] = useState(false);

  return (
    <dialog className="absolute top-0 left-0 w-screen h-screen bg-[var(--darkColor)] flex flex-col items-center justify-center gap-2">
      <button
        className="absolute top-[10%] right-[10%]"
        onClick={setIsModalOpen}
        type="button"
      >
        X
      </button>
      <h2 id="form-title">{title}</h2>
      <Form
        aria-labelledby="form-title"
        className="flex flex-col items-center justify-evenly h-4/5"
      >
        <FileTrigger acceptedFileTypes={["video/mp4"]}>
          <Button>Enregistrer votre vidéo</Button>
        </FileTrigger>
        <FileTrigger acceptedFileTypes={["image/png", "image/webp"]}>
          <Button>Enregistrer votre miniature</Button>
        </FileTrigger>
        <TextField name="text" type="text" isRequired necessityIndicator="icon">
          <Label>Titre</Label>
          <Input />
          <FieldError />
        </TextField>
        <TextArea label="Description" isRequired necessityIndicator="icon" />
        <Switch isSelected={selected} onChange={setSelection}>
          {selected ? "Abonné" : "Public"}
        </Switch>
        <Button type="submit">Submit</Button>
      </Form>
    </dialog>
  );
}

DashboardModal.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};