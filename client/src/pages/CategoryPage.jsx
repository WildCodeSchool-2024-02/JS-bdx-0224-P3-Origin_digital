import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";

function CategoryPage() {
  const category = useLoaderData();

  return (
    <main className="w-full px-4 py-8 mb:py-10 mb:px-6 lg:px-8 lg:py-14">
      <h1 className="w-full text-5xl text-center font-bold mb-6 md:mb-8 md:text-6xl lg:mb-10 lg:text-[4.5rem]">
        {category.name}
      </h1>
      <ul className="flex flex-col gap-y-6 mb:gap-y-8 lg:gap-y-10">
        {category.tags &&
          category.tags.map(
            (tag) =>
              tag.videos !== null && (
                <li key={tag.id}>
                  <h2 className="text-4xl font-semibold mb-2 md:mb-4 md:text-5xl lg:mb-6 lg:text-6xl">
                    {tag.name}
                  </h2>
                  <Slider resourceList={tag.videos} resourcePath="viewing" />
                </li>
              )
          )}
      </ul>
    </main>
  );
}

export default CategoryPage;
