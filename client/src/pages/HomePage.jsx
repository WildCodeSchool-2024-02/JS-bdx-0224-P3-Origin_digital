import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/registerSection";
import InfoSection from "../components/infoSection";
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
