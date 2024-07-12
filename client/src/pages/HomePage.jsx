import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/RegisterSection";
import InfoSection from "../components/InfoSection";
import SliderCategory from "../components/SliderCategory";

function Home() {
  return (
    <main>
      <HeroSection />
      <SliderCategory />
      <RegisterSection />
      <InfoSection />
    </main>
  );
}
export default Home;
