import { useState } from "react";
import DashboardVideo from "../components/DashboardVideo";
import DashboardModal from "../components/DashboardModal";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

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
        <DashboardVideo />
      </section>
      <DashboardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Ajouter une vidéo"
        validateText="Ajouter"
      />
    </>
  );
}
