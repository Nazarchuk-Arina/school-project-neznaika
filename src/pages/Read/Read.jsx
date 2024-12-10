import ChapterButtons from "../../components/ChapterButtons/ChapterButtons";
import Footer from "../../components/Footer/Footer";
import StarryBackground from "../../components/StarryBackground/StarryBackground";
import read from "../../assets/data/read.json";
import s from "./Read.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const Read = () => {
  const firstChapter = read[0];
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <StarryBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <div className={clsx("container", s.read__inner)}>
          <h1>Незнайка на луне</h1>
          <ChapterButtons readData={read} />
          {firstChapter && (
            <>
              <h2 className={s.title}>
                Глава {firstChapter.id}: <span>{firstChapter.title}</span>
              </h2>
              {firstChapter.text.map((paragraph, index) => (
                <p key={index} className={s.text}>
                  {paragraph}
                </p>
              ))}
            </>
          )}
          <button
            onClick={() => {
              navigate(`/read/2`);
            }}
            className={s.navButton}
          >
            Далее
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Read;
