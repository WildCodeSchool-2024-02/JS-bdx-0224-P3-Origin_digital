import { useLoaderData } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/RegisterSection";
import InfoSection from "../components/InfoSection";
import SliderCategory from "../components/SliderCategory";
import image1 from "../assets/images/training.jpg";
import image2 from "../assets/images/musculation.jpg";
import image3 from "../assets/images/nutrition.jpg";
import image4 from "../assets/images/yoga.jpg";
import image5 from "../assets/images/pilate.jpg";

function Home() {
  const categoryImages = [image1, image2, image3, image4, image5];
  const categories = useLoaderData();
  return (
    <main>
      <HeroSection />
      <SliderCategory categories={categories} categoryImages={categoryImages} />
      <RegisterSection />
      <InfoSection />
    </main>
  );
}
export default Home;
