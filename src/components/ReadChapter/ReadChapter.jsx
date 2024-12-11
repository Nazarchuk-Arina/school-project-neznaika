import s from "./ReadChapter.module.css";
import read from "../../assets/data/read.json";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

const ReadChapter = () => {
  const { readId } = useParams();
  const [chapter, setChapter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const chapterData = read.find((item) => item.id === Number(readId));
    setChapter(chapterData || null);
  }, [readId]);

  if (!chapter) {
    return <h3>Глава не найдена</h3>;
  }

  const goToPreviousChapter = () => {
    if (Number(readId) > 1) {
      navigate(`/read/${Number(readId) - 1}`);
    }
  };

  const goToNextChapter = () => {
    if (Number(readId) < read.length) {
      navigate(`/read/${Number(readId) + 1}`);
    }
  };

  return (
    <div className={clsx("container", s.read__inner)}>
      <Link to="/read" className={s.back}>
        Вернуться назад
      </Link>
      {chapter ? (
        <>
          <h2 className={s.title}>
            Глава {chapter.id}: {chapter.title}
          </h2>
          {/* <h2>{chapter.chapter}</h2>
          <h2 className={s.title}>{chapter.title}</h2> */}
          {chapter.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className={s.navigation}>
            <button
              onClick={goToPreviousChapter}
              disabled={Number(readId) === 1}
              className={s.navButton}
            >
              Назад
            </button>
            <button
              onClick={goToNextChapter}
              disabled={Number(readId) === read.length}
              className={s.navButton}
            >
              Далее
            </button>
          </div>
        </>
      ) : (
        <p className={s.error}>Глава не найдена</p>
      )}
    </div>
  );
};

export default ReadChapter;
