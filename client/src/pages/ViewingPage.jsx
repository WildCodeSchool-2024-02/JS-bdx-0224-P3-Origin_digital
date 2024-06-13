import { Link } from 'react-router-dom';

export default function ViewingPage() {
  return (
    <>
      <section className=" lg:w-4/6 lg:block lg:mx-auto lg:bg-[var(--secondaryColor)] lg:rounded-b-3xl lg:px-10 lg:pb-5">
        <video
          controls
          src="src\assets\videos\test3.mp4"
          className=" w-full max-h-screen"
        >
          <track kind="captions" />
        </video>
        <h1 className="font-bold text-3xl pt-2">Placeholder : Titre de vidéo</h1>
        <section className="p-0 [&>*]:mx-1 [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-3xl [&>*]:text-[var(--darkColor)] [&>*]:font-bold [&>*]:capitalize">
          <Link to="/tag1">#tag1</Link>
          <Link to="/tag2">#tag2</Link>
          <Link to="/tag3">#tag3</Link>
        </section>
        <p className="py-1 text-lg">Durée : XX minutes</p>
        <h3 className="text-2xl">Description</h3>
        <p className="text-lg">
        Placeholder : description 
        </p>
      </section>
      <h3>Suggestions</h3>
      <p>carrousel vidéo suggestion</p>
    </>
  );
}
