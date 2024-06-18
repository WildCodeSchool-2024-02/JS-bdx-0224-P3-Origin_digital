import HeroSection from "../components/HeroSection";
import RegisterSection from "../components/registerSection";
import InfoSection from "../components/infoSection";
import Slider from "../components/Slider";
import SubscriptionPage from "./SubscriptionPage";

function Home() {
  return (
    <main>
      <HeroSection />
      <section className="pt-24 pb-16 md:pt-32">
        <Slider />
      </section>
      <RegisterSection />
      <InfoSection />
    </main>
  );
}
export default Home;
