import ChapterButtons from "../../components/ChapterButtons/ChapterButtons";
import Footer from "../../components/Footer/Footer";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
import read from '../../assets/data/read.json'

const Read = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1>Незнайка на луне</h1>
        <ChapterButtons readData={read}/>
        <Footer />
      </div>
    </div>
  );
};

export default Read;
