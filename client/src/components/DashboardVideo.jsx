import { Checkbox, Cell, Row } from "react-aria-components";

export default function DashboardVideo() {
  return (
    <Row>
      <Cell>
        <Checkbox slot="selection" />
      </Cell>
      <Cell className="flex items-center">
        <img src="../src/assets/images/pilat.jpg" alt="" className="w-36" />
        <p className="px-4">Titre de la vidéo</p>
      </Cell>
      <Cell>Pilate</Cell>
      <Cell>
        <ul>
          <li>#Tag1</li>
          <li>#Tag2</li>
          <li>#Tag3</li>
        </ul>
      </Cell>
      <Cell>Abonné</Cell>
      <Cell>301</Cell>
      <Cell>18/06/2024</Cell>
    </Row>
  );
}
