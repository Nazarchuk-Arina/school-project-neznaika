import s from "./ReadAndListenMore.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const ReadAndListenMore = () => {
  return (
    <div className="container">
      <div className={s.r_and_l_inner}>
        <h3>
          А теперь погрузимся в увлекательное приключение вместе с Незнайкой!
        </h3>
        <nav className={s.r_and_l_buttons}>
          <NavLink className={clsx(buildLinkClass, s.button)} to="/read">
            Читать
          </NavLink>
          <NavLink className={clsx(buildLinkClass, s.button)} to="/listen">
            Слушать
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default ReadAndListenMore;
