import HeroSection from "../components/HeroSection";
import HomeSection from "../components/HomeSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <HomeSection reversed={false} />
      <HomeSection reversed />
    </main>
  );
}
export default Home;
