import { useState } from "react";
import { Cell, Row } from "react-aria-components";
import { Link } from "react-router-dom";

export default function DashboardVideo() {
  const tag = [
    "#Tag1",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
    "#Tag2",
  ];
  const [showAllTags, setShowAllTags] = useState(false);

  const handleButtonClick = () => {
    setShowAllTags(!showAllTags);
  };

 return (
    <Row className="[&>*]:border-2 [&>*]:px-2 lg:[&>*]:px-0">
      <Cell className="px-0">
        <img
          src="../src/assets/images/pilat.jpg"
          alt=""
          className="w-36 inline float-left"
        />
        <p className="block text-ellipsis pt-10">Titre de la vidéo</p>
      </Cell>
      <Cell>Pilate</Cell>
      <Cell className="py-2 px-0">
        <ul className="flex flex-wrap w-auto justify-center items-center gap-4 [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-full [&>*]:text-[var(--darkColor)] [&>*]:capitaliz [&>*]:my-1 [&>*]:border-2 [&>*]:border-dark-color">
          {(showAllTags ? tag : tag.slice(0, 2)).map((tags) => (
            <li key={tags}>{tags}</li>
          ))}
        </ul>
        {tag.length > 3 && (
          <button
            type="button"
            className="bg-inherit hover:bg-inherit hover:text-black font-thin pt-3 textHoverUnderline"
            onClick={handleButtonClick}
          >
            {showAllTags ? "Afficher moins" : "Afficher plus"}
          </button>
        )}
      </Cell>
      <Cell>Abonné</Cell>
      <Cell>301</Cell>
      <Cell>18/06/2024</Cell>
      <Cell>
        <ul className="flex flex-col gap-4">
          <li>
            <button type="button" className="textHoverUnderline">
              Modifier
            </button>
          </li>
          <li>
            <button type="button" className="textHoverUnderline">
              Supprimer
            </button>
          </li>
        </ul>
      </Cell>
    </Row>
  );
}