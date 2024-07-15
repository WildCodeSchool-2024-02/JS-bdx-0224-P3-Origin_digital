import { useRef, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import DashboardVideo from "../components/DashboardVideo";
import DashboardModal from "../components/DashboardModal";
import { sendData } from "../services/api.service";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toModify, setToModify] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState("Public");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const ref = useRef();
  const tags = useLoaderData();

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen === true && toModify === true) {
      setToModify(false);
    }
  };

  const handleOpenModalModify = () => [
    setToModify(!toModify),
    setIsModalOpen(!isModalOpen),
  ];

  const handleClickAccessSelection = () => {
    setSelectedAccess(selectedAccess === "Public" ? "Abonnés" : "Public");
  };

  const handleChangeSelectedTags = (selectedList) => {
    setSelectedTags(selectedList);
  };

  const handleSumbitModal = (formData) => {
    sendData("/api/videos", formData);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <>
      <main>
        <input
          type="text"
          placeholder="Rechercher une vidéo.."
          className="mt-6 lg:mr-5 bg-primary-color rounded-full p-1 lg:p-2 pl-4 ml-4 md:ml-8 lg:ml-12 w-[90vw] lg:w-auto"
        />
        <button
          type="button"
          className="p-0 mt-6 ml-4 px-4 h-8 lg:h-11 rounded-full overflow-hidden w-[90vw] lg:w-auto"
          onClick={handleOpenModal}
        >
          + Ajouter une vidéo
        </button>
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
              <Column className="px-3 lg:p-0 lg:w-36 rounded-tr-3xl">
                Modification
              </Column>
            </TableHeader>
            <TableBody className="[&>*:nth-child(even)]:bg-secondary-color ">
              <DashboardVideo handleOpenModalModify={handleOpenModalModify} />
              <DashboardVideo />
            </TableBody>
          </Table>
        </section>
      </main>
      <DashboardModal
        displayClass={isModalOpen ? "grid" : "none"}
        handleOpenModal={handleOpenModal}
        isModalOpen={isModalOpen}
        toModify={toModify}
        tags={tags}
        selectedTags={selectedTags}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleClickAccessSelection={handleClickAccessSelection}
        handleChangeSelectedTags={handleChangeSelectedTags}
        ref={ref}
        selectedAccess={selectedAccess}
        setSelectedAccess={setSelectedAccess}
        handleSumbitModal={handleSumbitModal}
      />
    </>
  );
}
