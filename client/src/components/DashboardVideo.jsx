import { Cell, Row } from "react-aria-components";
import { Link } from 'react-router-dom';

export default function DashboardVideo() {
  return (
    <Row>
      <Cell className="flex items-center">
        <img src="../src/assets/images/pilat.jpg" alt="" className="w-36" />
        <p className="px-4">Titre de la vidéo</p>
      </Cell>
      <Cell>Pilate</Cell>
      <Cell>
        <ul className="p-0 flex flex-wrap w-auto h-24 justify-center items-center overflow-auto gap-2  [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-3xl [&>*]:text-[var(--darkColor)] [&>*]:font-bold [&>*]:capitalize">
          <li>#Tag1</li>
          <li>#Tag2</li>
          <li>#Tag3</li>
        </ul>
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
