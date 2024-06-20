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
        <button type="button" onClick={handleOpenModal}>
          {" "}
          +{" "}
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
