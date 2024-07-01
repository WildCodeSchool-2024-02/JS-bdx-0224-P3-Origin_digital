import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/RegisterSection";
import InfoSection from "../components/InfoSection";
import Slider from "../components/Slider";
import SliderCategory from "../components/SliderCategory";


function Home() {
  return (
    <main>
      <HeroSection />
      <Slider />
        <SliderCategory />
      <RegisterSection />
      <InfoSection />
    </main>
  );
}
export default Home;
