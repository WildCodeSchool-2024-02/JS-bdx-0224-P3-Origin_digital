<<<<<<< HEAD
import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import { useState } from "react";
import DashboardVideo from "../components/DashboardVideo";
import DashboardModal from "../components/DashboardModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [toModify, setToModify] = useState(false);

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);
  //   const handleOpenModalModify = () => [
  //     setIsModalOpen(!isModalOpen),
  //     setToModify(!toModify),
  //   ];

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Rechercher une vidéo.."
          className="bg-(var"
        />
        <button
          type="button"
          onClick={handleOpenModal}
          className="flex items-center"
        >
          +
        </button>
        <section className="overflow-x-auto rounded-xl">
          <Table aria-label="Files" selectionMode="multiple">
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
              <DashboardVideo handleOpenModal={handleOpenModal} />
              <DashboardVideo handleOpenModal={handleOpenModal} />
              <DashboardVideo handleOpenModal={handleOpenModal} />
              <DashboardVideo handleOpenModal={handleOpenModal} />
            </TableBody>
          </Table>
        </section>
      </section>
      <DashboardModal
        displayClass={isModalOpen ? "grid" : "none"}
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        toModify
      />
    </>
  );
}
=======
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
            <Column className="px-3 lg:p-0 lg:w-36 rounded-tr-3xl">Modification</Column>
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
>>>>>>> a544384794d8c3897bed38d10985055818d8c71d
