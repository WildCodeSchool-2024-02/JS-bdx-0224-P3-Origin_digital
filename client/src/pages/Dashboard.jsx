import {
  Checkbox,
  Column,
  Table,
  TableHeader,
  TableBody,
} from "react-aria-components";
import DashboardVideo from "../components/DashboardVideo";

export default function Dashboard() {
  return (
    <section>
      <input
        type="text"
        placeholder="Rechercher une vidéo.."
        className="bg-(var"
      />
      <button type="button"> + </button>
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader className=" bg-[var(--primaryLight)]">
          <Column className="px-20">
            <Checkbox slot="selection" />
          </Column>
          <Column isRowHeader className="px-20">
            Vos vidéos
          </Column>
          <Column className="px-20">Catégorie</Column>
          <Column className="px-20">Tag</Column>
          <Column className="px-20">Visibilité</Column>
          <Column className="px-10">Vue</Column>
          <Column className="px-10">Publication</Column>
        </TableHeader>
        <TableBody>
          <DashboardVideo />
          <DashboardVideo />
          <DashboardVideo />
          <DashboardVideo />
        </TableBody>
      </Table>
    </section>
  );
}
