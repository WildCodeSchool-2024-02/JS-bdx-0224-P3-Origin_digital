import { Column, Table, TableHeader, TableBody } from "react-aria-components";
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
      <section className="overflow-x-auto rounded-xl">
      <Table aria-label="Files" selectionMode="multiple" >
        <TableHeader className=" bg-[var(--primaryLight)]">
          <Column isRowHeader className="w-60">
            Vos vidéos
          </Column>
          <Column className="w-28">Catégorie</Column>
          <Column className="w-56">Tag</Column>
          <Column className="w-28">Visibilité</Column>
          <Column className="w-16">Vue</Column>
          <Column className="w-36">Publication</Column>
          <Column className="w-36">Modification</Column>
        </TableHeader>
        <TableBody>
          <DashboardVideo />
          <DashboardVideo />
        </TableBody>
      </Table>
      </section>
    </section>
  );
}
