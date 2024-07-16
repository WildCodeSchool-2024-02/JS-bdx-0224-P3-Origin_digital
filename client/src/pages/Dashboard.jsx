import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import DashboardVideo from "../components/DashboardVideo";
// import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  // const video = useLoaderData();
  // console.log(video);

  return (
    <>
      <h2>Votre Tableau de bord</h2>
      <input
        type="text"
        placeholder="Rechercher une vidéo.."
        className="mt-4 ml-4 h-8 pl-4 w-64 border-4 border-primary-dark bg-light-color rounded-full lg:h-10"
      />
      <button
        type="button"
        className="mt-4 mb-2 ml-4 w-64 rounded-full "
      >
        + Ajouter une vidéo
      </button>
      <section className=" overflow-x-auto rounded-xl">
        <Table className="w-[90vw] mx-auto">
          <TableHeader className="bg-primary-color">
            <Column isRowHeader className="px-28 lg:p-0 w-60 rounded-tl-3xl">
              Vos vidéos
            </Column>
            <Column className="px-3 lg:p-0 lg:w-28">Catégorie</Column>
            <Column className="px-28 lg:p-0 lg:w-44">Tag</Column>
            <Column className="px-3 lg:p-0 lg:w-28">Visibilité</Column>
            <Column className="px-3 lg:p-0 lg:w-16">Vue</Column>
            <Column className="px-3 lg:p-0 lg:w-36">Publication</Column>
            <Column className="px-3 lg:p-0 lg:w-36 rounded-tr-3xl">
              Modification
            </Column>
          </TableHeader>
          <TableBody className="[&>*:nth-child(even)]:bg-secondary-color ">
            <DashboardVideo/>
            <DashboardVideo />
          </TableBody>
        </Table>
      </section>
    </>
  );
}
