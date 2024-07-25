import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { Column, Table, TableHeader, TableBody } from "react-aria-components";
import { useCookies } from "react-cookie";
import DashboardVideo from "../components/DashboardVideo";
import DashboardModal from "../components/DashboardModal";
import { deleteVideo, getData, getSecureData } from "../services/api.service";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toModify, setToModify] = useState(false);
  const [selectedAccess, setSelectedAccess] = useState(false);
  const [videoFileName, setVideoFileName] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [videoToModify, setVideoToModify] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);
  const [, setVideos] = useState([]);
  const [cookies] = useCookies("jwt");
  const [lesson, setLesson] = useState([]);
  const [filteredLesson, setFilteredLesson] = useState([]);
  const [, setSearch] = useState("");

  const { tags, categories } = useLoaderData();

  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeInClass = `transition-opacity duration-[1000ms] ease-out transform ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  }`;

  const handleChangeCategory = (e) => {
    setSelectedCategory(parseInt(e.target.value, 10));
  };

  const handleChangeTags = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value, 10)
    );
    setSelectedTags(selectedOptions);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    setSelectedAccess(false);
    setSelectedCategory(1);
    setSelectedTags([]);
    if (isModalOpen === true && toModify === true) {
      setToModify(false);
      setVideoToModify({});
    }
  };

  const handleOpenModalModify = async (videoId) => {
    setToModify(true);
    setIsModalOpen(true);
    getData(`/api/videos/${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        setVideoToModify(data);
        setSelectedCategory(data.category_id);
        setSelectedTags(data.tags.map((tag) => tag));
        setSelectedAccess(data.access === "true");
      });
  };

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

  const handleDeleteVideo = (videoId) => {
    deleteVideo("/api/videos/", videoId, cookies.jwt);
    return window.location.reload();
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const searchedLessons = lesson.filter(
      (lessons) =>
        lessons.title.toLowerCase().includes(value) ||
        lessons.category_name.toLowerCase().includes(value) ||
        lessons.tags.toLowerCase().includes(value)
    );

    setFilteredLesson(searchedLessons);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  useEffect(() => {
    getSecureData("/api/videos", cookies.jwt)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        setLesson(data);
        setFilteredLesson(data);
      });
  }, []);

  return (
    <>
      <main ref={inViewRef} className={`${fadeInClass} min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]`}>
        <header className="px-4 py-4 md:px-8 lg:px-12 flex flex-wrap gap-4">
          <h2 className="w-full font-semibold">Votre Tableau de bord</h2>
          <input
            type="text"
            aria-label="Rechercher une vidéo"
            placeholder="Rechercher une vidéo.."
            className="h-8 pl-4 w-64 border-2 border-primary-dark bg-light-color rounded-xl focus:border-primary-dark focus:ring ring-offset-2 focus:outline-none focus:ring-primary-dark transition ease-in-out delay-150 lg:h-10"
            onChange={handleSearch}
          />
          <button type="button" className="w-64" onClick={handleOpenModal}>
            + Ajouter une vidéo
          </button>
        </header>
        <section className="overflow-x-auto rounded-xl">
          <Table className="w-full mx-auto">
            <TableHeader className="bg-primary-color">
              <Column isRowHeader className="px-28 lg:p-0 w-60 rounded-tl-xl">
                Vos vidéos
              </Column>
              <Column className="px-3 lg:p-0 lg:w-28">Catégorie</Column>
              <Column className="px-28 lg:p-0 lg:w-44">Tag</Column>
              <Column className="px-3 lg:p-0 lg:w-28">Visibilité</Column>
              <Column className="px-3 lg:p-0 lg:w-36">Publication</Column>
              <Column className="px-3 lg:p-0 lg:w-36 rounded-tr-xl">
                Modification
              </Column>
            </TableHeader>
            <TableBody className="[&>*:nth-child(even)]:bg-secondary-color ">
              {filteredLesson &&
                filteredLesson.map((video) => (
                  <DashboardVideo
                    video={video}
                    key={video.id}
                    handleOpenModalModify={handleOpenModalModify}
                    handleDeleteVideo={handleDeleteVideo}
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
        categories={categories}
        selectedCategory={selectedCategory}
        handleChangeCategory={handleChangeCategory}
        videoToModify={videoToModify}
        selectedTags={selectedTags}
        handleChangeTags={handleChangeTags}
      />
    </>
  );
}
