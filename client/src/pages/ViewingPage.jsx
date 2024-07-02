import { Link } from "react-router-dom";

export default function ViewingPage() {
  return (
    <>
      <section className="p-0 md:w-4/6 md:mx-auto md:my-5 md:p-5 md:bg-secondary-color md:rounded-xl ">
        <video
          controls
          src="src\assets\videos\test3.mp4"
          className=" w-full max-h-screen mb-4"
        >
          <track kind="captions" />
        </video>
        <section className="p-0 [&>*]:tagsViewing">
          <Link
            to="/tag1"
          >
            #tag1
          </Link>
          <Link
            to="/tag2"
          >
            #tag2
          </Link>
          <Link
            to="/tag3"
          >
            #tag3
          </Link>
        </section>
        <h2 className="font-bold mt-4">Placeholder : Titre de vidéo</h2>
        <p>Durée : XX minutes</p>
        <h3 className="font-bold mt-4">Description</h3>
        <p>Placeholder : description</p>
      </section>
      <h2>Suggestions</h2>
      <p>carrousel vidéo suggestion</p>
    </>
  );
}
