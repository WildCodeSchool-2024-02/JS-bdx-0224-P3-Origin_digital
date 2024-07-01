import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";

function CategoryPage() {
  const category = useLoaderData();
  console.info(category);

  return (
    <main>
      <h1>{category.name}</h1>
      <ul>
        {category.tags.map((tag) => (
          <li key={tag.id}>
            <h2>{tag.name}</h2>
            <Slider resourceList={tag.videos} resourcePath="video" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default CategoryPage;
