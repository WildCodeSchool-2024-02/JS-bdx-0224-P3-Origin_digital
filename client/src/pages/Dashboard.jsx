import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import DashboardVideo from "../components/DashboardVideo";

export default function Dashboard() {
  return (
    <>
      <input
        type="text"
        placeholder="Rechercher une vidéo.."
        className="mt-6 lg:mr-5 bg-primary-color rounded-full p-1 lg:p-2 pl-4 ml-4 md:ml-8 lg:ml-12 w-[90vw] lg:w-auto"
      />
      <button type="button" className="p-0 mt-6 ml-4 px-4 h-8 lg:h-11  rounded-full overflow-hidden w-[90vw] lg:w-auto">+ Ajouter une vidéo</button>
      <section className="overflow-x-auto rounded-xl">
        <h2>Votre Tableau de bord</h2>
        <Table>
          <TableHeader className="bg-primary-color">
            <Column isRowHeader className="w-60 rounded-tl-3xl">
              Vos vidéos
            </Column>
            <Column className="w-28">Catégorie</Column>
            <Column className="w-44">Tag</Column>
            <Column className="w-28">Visibilité</Column>
            <Column className="w-16">Vue</Column>
            <Column className="w-36">Publication</Column>
            <Column className="w-36 rounded-tr-3xl">Modification</Column>
          </TableHeader>
          <TableBody className="[&>*:nth-child(even)]:bg-secondary-color ">
            <DashboardVideo />
            <DashboardVideo />
          </TableBody>
        </Table>
      </section>
    </>
  );
}
