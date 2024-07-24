import { useState } from "react";
import PropTypes from "prop-types";
import { Cell, Row } from "react-aria-components";

export default function DashboardVideo({
  video,
  handleOpenModalModify,
  handleDeleteVideo,
}) {
  const [showAllTags, setShowAllTags] = useState(false);

  const handleButtonClick = () => {
    setShowAllTags(!showAllTags);
  };

  const tagsArray = video.tags.split(",");


  return (
    <Row className="[&>*]:border-2 [&>*]:px-2 lg:[&>*]:px-0">
      <Cell className="p-0">
        <img
          src={`http://localhost:3310/assets/images/${video.img_url}`}
          alt=""
          className="w-36 inline float-left mr-4"
        />
        <p className="block text-ellipsis pt-10"> {video.title} </p>
      </Cell>
      <Cell className="text-center"> {video.category_name} </Cell>
      <Cell className="py-2 px-0">
        <ul
          className="flex flex-wrap w-auto justify-center items-center gap-3 [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 
        [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-full [&>*]:text-[var(--darkColor)] [&>*]:capitaliz [&>*]:my-1 [&>*]:border-2 
        [&>*]:border-dark-color"
        >
          {(showAllTags ? tagsArray : tagsArray.slice(0, 3)).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {tagsArray.length > 3 && (
          <button
            type="button"
            className="bg-inherit hover:bg-inherit hover:text-black font-thin pt-3"
            onClick={handleButtonClick}
          >
            {showAllTags ? "Afficher moins" : "Afficher plus"}
          </button>
        )}
      </Cell>
      <Cell className="text-center">
        {" "}
        {video.access ? "Abonné" : "Public"}{" "}
      </Cell>
      <Cell> {video.upload_date.split("T")[0]} </Cell>
      <Cell>
        <ul className="flex flex-col gap-4 items-center justify-center py-2">
          <li>
            <button
              type="button"
              onClick={() => handleOpenModalModify(video.video_id)}
              className=" min-w-32"
            >
              Modifier
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleDeleteVideo(video.video_id)}
              className=" min-w-32"
            >
              Supprimer
            </button>
          </li>
        </ul>
      </Cell>
    </Row>
  );
}

DashboardVideo.propTypes = {
  video: PropTypes.shape({
    video_id: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    upload_date: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    access: PropTypes.string.isRequired,
  }).isRequired,
  handleOpenModalModify: PropTypes.func.isRequired,
  handleDeleteVideo: PropTypes.func.isRequired,
};
