export default function ViewingPage() {
  return (
    <>
      <section>
        <video
          controls
          src="src\assets\videos\test2.mp4"
          className="w-full lg:w-5/6 lg:block lg:mx-auto"
        >
          <track kind="captions" />
        </video>
        <section className="[&>*]:mx-1">
          <button type="button">#tag1</button>
          <button type="button">#tag2</button> 
          <button type="button">#tag3</button>
        </section>
        <h1>Titre vidéo</h1>
        <p className="h-8">Durée : XX minutes</p>
        <h3>Description</h3>
        <p>
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
