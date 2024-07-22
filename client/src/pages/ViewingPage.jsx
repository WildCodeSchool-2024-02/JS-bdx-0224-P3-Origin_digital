import { useLoaderData, Link } from "react-router-dom";

export default function ViewingPage() {
  const video = useLoaderData();


  const tags = video.tags ? video.tags.split(', ') : [];

  return (
    <>
      <section className="p-0 md:w-4/6 md:mx-auto md:my-5 md:p-5 md:bg-secondary-color md:rounded-xl ">
        <video
          controls
          src={video.video_url}
          className=" w-full max-h-screen mb-4"
        >
          <track kind="captions" />
        </video>
        <section className="p-0 [&>*]:tagsViewing">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <Link key={tag} to={`/tags/${tag}`}>
                #{tag}
              </Link>
            ))
          ) : (
            <p>Aucuns tags</p>
          )}
        </section>
        <h2 className="font-bold mt-4">{video.title}</h2>
        <p>Durée : {video.duration} minutes</p>
        <h3 className="font-bold mt-4">Description</h3>
        <p>{video.description}</p>
      </section>
      <h2>Suggestions</h2>
      <p>carrousel vidéo suggestion</p>
    </>
  );
}
