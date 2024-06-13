import HeroSection from "../components/HeroSection";
import HomeSection from "../components/HomeSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <HomeSection
        alignItem="md:items-end"
        imgSrc="./src/assets/images/runner.webp"
        title="Pourquoi s'abonner ?"
      />
      <HomeSection
        alignItem="md:items-start"
        imgSrc="./src/assets/images/crossfit.webp"
        title="Les avantages"
      />
    </main>
  );
}
export default Home;
