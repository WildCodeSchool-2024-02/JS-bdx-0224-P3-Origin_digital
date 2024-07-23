import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

export default function ViewingPage() {
  const video = useLoaderData();

  return (
    <>
      <section className="p-0 md:w-4/6 md:mx-auto md:my-5 md:p-5 md:bg-secondary-color md:rounded-xl ">
        <video
          controls
          src={`http://localhost:3310/assets/videos/${video.video_url}`}
          className=" w-full max-h-screen mb-4"
        >
          <track kind="captions" />
        </video>
        <section className="p-0 ">
          <ul className="flex gap-2 flex-wrap [&>*]:tagsViewing">
            {video.tags.length > 0 ? (
              video.tags.map((tag) => (
                <li key={tag.id} className=" duration-300">
                  #{tag.name}
                </li>
              ))
            ) : (
              <li>Aucuns tags</li>
            )}
          </ul>
        </section>
        <h2 className="font-bold mt-4">{video.title}</h2>
        <p>Durée : {video.duration} minutes</p>
        <h3 className="font-bold mt-4">Description</h3>
        <p>{video.description}</p>
      </section>
      <h2>Suggestions</h2>
      <p>carrousel vidéo suggestion</p>

      <Footer />
    </>
  );
}
