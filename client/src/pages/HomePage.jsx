import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/registerSection";
import InfoSection from "../components/infoSection";
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
