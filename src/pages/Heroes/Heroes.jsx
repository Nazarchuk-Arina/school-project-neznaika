import Footer from "../../components/Footer/Footer";
// import HeroesList from "../../components/HeroesList/HeroesList";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
// import heroesData from "../../assets/data/heroes.json";

const Heroes = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <HeroesList heroes={heroesData} /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Heroes;
