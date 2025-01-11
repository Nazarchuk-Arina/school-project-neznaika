import Footer from "../../components/Footer/Footer";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
import Header from "../../components/Header/Header.jsx";

const Play = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Play;
