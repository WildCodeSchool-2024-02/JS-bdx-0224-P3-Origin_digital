import { useState } from "react";
import { Cell, Row } from "react-aria-components";
import { Link } from 'react-router-dom';

export default function DashboardVideo() {
const tag = ["#Tag1","#Tag2","#Tag2","#Tag2","#Tag2","#Tag2","#Tag2","#Tag2","#Tag2","#Tag2"]
const [showAllTags, setShowAllTags] = useState(false);

const handleButtonClick = () => {
  setShowAllTags(!showAllTags);
};

  return (
    <Row>
      <Cell>
        <img src="../src/assets/images/pilat.jpg" alt="" className="w-36 inline"/>
        <p className="p-4 inline text-ellipsis">Titre de la vidéo</p>
      </Cell>
      <Cell>Pilate</Cell>
      <Cell className="py-2">
        <ul className="flex flex-wrap w-auto justify-center items-center  gap-2  [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-3xl [&>*]:text-[var(--darkColor)] [&>*]:font-bold [&>*]:capitalize">
        {(showAllTags ? tag : tag.slice(0, 2)).map((tags) => (
          <li key={tags}>{tags}</li>
        ))}
      </ul>
      {tag.length > 3 && (
        <button type="button" className="h-8 mt-2 text-sm" onClick={handleButtonClick}>
          {showAllTags ? 'Afficher moins' : 'Afficher plus'}
        </button>
      )}
      </Cell>
      <Cell>Abonné</Cell>
      <Cell>301</Cell>
      <Cell>18/06/2024</Cell>
      <Cell>
        <ul className="flex flex-col gap-4">
          <li><Link to="/">Modifier</Link></li>
          <li><Link to="/">Supprimer</Link></li>
        </ul>
      </Cell>
    </Row>
  );
}
