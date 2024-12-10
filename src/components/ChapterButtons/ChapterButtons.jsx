import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router";
import s from "./ChapterButtons.module.css";

const ChapterButtons = ({ readData }) => {
  // const location = useLocation();

  return (
    <section>
      <ul className={s.list}>
        {readData.map(({ id }) => (
          <li key={id} className={s.item}>
            <NavLink to={`/read/${id}`} state={{ from: location }}>
              {id}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChapterButtons;
