import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/RegisterSection";
import InfoSection from "../components/InfoSection";
import SliderCategory from "../components/SliderCategory";
import { getData } from "../services/api.service";
import image1 from "../assets/images/training.jpg";
import image2 from "../assets/images/musculation.jpg";
import image4 from "../assets/images/nutrition.jpg";
import image3 from "../assets/images/yoga.jpg";
import image5 from "../assets/images/pilat.jpg";
import Footer from "../components/Footer";

function Home() {
  const categoryImages = [image1, image5, image4, image2, image3];
  const categories = useLoaderData();

  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await getData(`/api/videos/17`);
      const videoData = await response.json();
      setVideo(videoData);
    };

    fetchVideo();
  }, []);

  return (
    <>
      <main>
        <HeroSection />
        <SliderCategory
          categories={categories}
          categoryImages={categoryImages}
        />
        <RegisterSection video={video} />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
