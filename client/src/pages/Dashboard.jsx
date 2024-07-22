import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import { useCookies } from "react-cookie";
import DashboardVideo from "../components/DashboardVideo";
import DashboardModal from "../components/DashboardModal";
import { getSecureData } from "../services/api.service";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toModify, setToModify] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState(false);
  const [videoFileName, setVideoFileName] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [videos, setVideos] = useState([]);
  const [cookies] = useCookies("jwt");
  const tags = useLoaderData();

  useEffect(() => {
    getSecureData("/api/videos", cookies.jwt)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

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
    setSelectedAccess(!selectedAccess);
  };

  const handleVideoFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFileName(file.name);
    }
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFileName(file.name);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <>
      <main>
        <h2>Votre Tableau de bord</h2>
        <input
          type="text"
          placeholder="Rechercher une vidéo.."
          className="mt-4 ml-4 h-8 pl-4 w-64 border-4 border-primary-dark bg-light-color rounded-full lg:h-10"
        />
        <button
          type="button"
          className="mt-4 mb-2 ml-4 w-64 rounded-full "
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
              <Column className="px-3 lg:p-0 lg:w-36">Publication</Column>
              <Column className="px-3 lg:p-0 lg:w-36 rounded-tr-3xl">
                Modification
              </Column>
            </TableHeader>
            <TableBody className="[&>*:nth-child(even)]:bg-secondary-color ">
              {videos &&
                videos.map((video) => (
                  <DashboardVideo
                    video={video}
                    key={video.id}
                    handleOpenModalModify={handleOpenModalModify}
                  />
                ))}
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
        handleClickAccessSelection={handleClickAccessSelection}
        selectedAccess={selectedAccess}
        setSelectedAccess={setSelectedAccess}
        handleVideoFileChange={handleVideoFileChange}
        handleImageFileChange={handleImageFileChange}
        imageFileName={imageFileName}
        videoFileName={videoFileName}
        cookies={cookies}
      />
    </>
  );
}
