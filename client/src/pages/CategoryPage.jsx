import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";

function CategoryPage() {
  const category = useLoaderData();

  return (
    <main>
      <Slider sportList={category} />
    </main>
  );
}

export default CategoryPage;
