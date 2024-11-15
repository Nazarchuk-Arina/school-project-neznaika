import Hero from "./Hero/Hero";
import AboutBook from "./AboutBook/AboutBook";
import HeroesList from "./HeroesList/HeroesList";
import HeroMain from "./HeroMain/HeroMain";
import ReadAndListenMore from "./ReadAndListenMore/ReadAndListenMore";

const App = () => {
  return (
    <div>
      <Hero />
      <AboutBook />
      <HeroMain />
      <ReadAndListenMore />
      <HeroesList />
    </div>
  );
};

export default App;
