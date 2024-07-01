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
        <section className="p-0 [&>*]:mx-1 [&>*]:py-1 [&>*]:px-6 [&>*]:text-xl [&>*]:bg-primary-color [&>*]:border-2 [&>*]:border-dark-color [&>*]:rounded-full [&>*]:text-dark-color [&>*]:font-bold [&>*]:capitalize">
          <Link
            to="/tag1"
            className="hover:text-light-color hover:border-light-color hover:bg-primary-dark hover:ring-2 hover:ring-primary-dark"
          >
            #tag1
          </Link>
          <Link
            to="/tag2"
            className="hover:text-light-color hover:border-light-color hover:bg-primary-dark hover:ring-2 hover:ring-primary-dark "
          >
            #tag2
          </Link>
          <Link
            to="/tag3"
            className="hover:text-light-color hover:border-light-color hover:bg-primary-dark hover:ring-2 hover:ring-primary-dark "
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
