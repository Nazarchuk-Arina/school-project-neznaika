import { NavLink } from "react-router-dom";
import s from "./ChapterButtons.module.css";

const ChapterButtons = ({ readData }) => {
  return (
    <section>
      <ul className={s.list}>
        {readData.map(({ id }) => (
          <li key={id} className={s.item}>
            <NavLink to={`/read/${id}`} className={s.btn}>
              {id}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChapterButtons;
