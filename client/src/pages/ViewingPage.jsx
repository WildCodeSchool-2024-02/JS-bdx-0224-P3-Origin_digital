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
        <h1 className="font-bold text-3xl pt-2">INOXTAG au sommet de l'EVERST 😮🤣😎test test test test</h1>
        <section className="p-0 [&>*]:mx-1 [&>*]:py-0 [&>*]:px-4 [&>*]:text-xl [&>*]:h-7 [&>*]:bg-[var(--primaryColor)] [&>*]:rounded-3xl [&>*]:text-[var(--darkColor)] [&>*]:font-bold [&>*]:capitalize">
          <Link to="/tag1">#tag1</Link>
          <Link to="/tag2">#tag2</Link>
          <Link to="/tag3">#tag3</Link>
        </section>
        <p className="py-1 text-lg">Durée : XX minutes</p>
        <h3 className="text-2xl">Description</h3>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laboriosam repellat facilis saepe in necessitatibus facere cupiditate
          unde! Eum nam porro dolorum ratione veritatis ex debitis fugit officia
          fuga sed numquam asperiores consequatur expedita corrupti ab
          laudantium exercitationem animi voluptas autem, excepturi mollitia
          non! Consectetur est veritatis sunt minus expedita, inventore
          asperiores facere libero aut laudantium ut, unde vitae corrupti,
          laborum sequi soluta maxime sed harum reprehenderit optio impedit
          debitis? Non aperiam laudantium magni, ipsam consectetur quam
          doloribus harum veritatis corporis repellendus dolore aspernatur enim
          reprehenderit veniam quibusdam nisi? Exercitationem iusto dicta odit
          voluptatem! Temporibus, tenetur? Perspiciatis repellendus beatae aut?
        </p>
      </section>
      <h3>Suggestions</h3>
      <p>carrousel vidéo suggestion</p>
    </>
  );
}
