import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";

export default function ViewingPage() {
  const { tags, video } = useLoaderData();
  const videoTags = tags.filter((tag) => video.tags.includes(tag.id));

  return (
    <main>
      <section className="p-0 pb-6 md:w-4/6 md:mx-auto md:my-5 md:p-5 md:bg-secondary-color md:rounded-xl ">
        <video
          controls
          src={`http://localhost:3310/assets/videos/${video.video_url}`}
          className=" w-full max-h-screen mb-4"
        >
          <track kind="captions" />
        </video>
        <section className="px-4">
          <ul className="flex gap-2 flex-wrap [&>*]:tagsViewing">
            {videoTags.length > 0 ? (
              videoTags.map((tag) => (
                <li key={tag.id} className="duration-300 text-sm">
                  #{tag.name}
                </li>
              ))
            ) : (
              <li>Aucuns tags</li>
            )}
          </ul>
        </section>
        <h2 className="font-bold mt-4 px-4">{video.title}</h2>
        <p className="px-4">Durée : {video.duration} minute(s)</p>
        <h3 className="font-bold mt-4 px-4">Description</h3>
        <p className="px-4">{video.description}</p>
      </section>
      <Footer />
    </main>
  );
}
