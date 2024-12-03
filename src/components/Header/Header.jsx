import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div className={s.header__inner}>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/">
            logo
          </NavLink>
          <div>
            <NavLink className={buildLinkClass} to="/heroes">
              Герои
            </NavLink>
            <NavLink className={buildLinkClass} to="/read">
              Читать
            </NavLink>
            <NavLink className={buildLinkClass} to="/listen">
              Слушать
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
