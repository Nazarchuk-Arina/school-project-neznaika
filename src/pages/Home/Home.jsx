import AboutBook from "../../components/AboutBook/AboutBook";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HeroMain from "../../components/HeroMain/HeroMain";
import ReadAndListenMore from "../../components/ReadAndListenMore/ReadAndListenMore";
import StarryBackground from "../../components/StarryBackground/StarryBackground";

const Home = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <AboutBook />
        <HeroMain />
        <ReadAndListenMore />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
