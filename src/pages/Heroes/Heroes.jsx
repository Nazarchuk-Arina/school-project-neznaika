import Footer from "../../components/Footer/Footer";
import HeroesList from "../../components/HeroesList/HeroesList";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
import { data } from "../../assets/data/heroes.js";

const Heroes = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <HeroesList heroes={data} />
        <Footer />
      </div>
    </div>
  );
};

export default Heroes;
