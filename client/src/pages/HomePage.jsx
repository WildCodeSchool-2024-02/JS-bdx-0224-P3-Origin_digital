import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/RegisterSection";
import InfoSection from "../components/InfoSection";
import Slider from "../components/Slider";

function Home() {
  return (
    <main>
      <HeroSection />
      <Slider />
      <RegisterSection />
      <InfoSection />
    </main>
  );
}
export default Home;
