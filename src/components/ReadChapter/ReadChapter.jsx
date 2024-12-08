// import s from "./ReadChapter.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import read from "../../assets/data/read.json";

const ReadChapter = () => {
  const { readId } = useParams();
  const [chapter, setChapter] = useState({
    id: "",
    chapter: "",
    title: "",
    text: "",
  });

  useEffect(() => {
    // const data = read.find(({ id, chapter, title, text }) =>
    //   id === readId ? setChapter({ id, chapter, title, text }) : setChapter({})
    // );
    // console.log(data);

    setChapter((prevState) => prevState.id !== readId );

    console.log(chapter);
  }, [chapter, readId]);
  return <div></div>;
};

export default ReadChapter;
