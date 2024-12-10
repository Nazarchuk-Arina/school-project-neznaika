import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import logoTel from "../../assets/images/logo/logo-tel-min.png";
import logoTab from "../../assets/images/logo/logo-tab-min.png";
import logoDesc from "../../assets/images/logo/logo-desc-min.png";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div className={s.header__inner}>
      <header className={s.header}>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/">
            <div>
              <img
                src={logoTel}
                srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
                sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
                alt="logo of our book"
              />
            </div>
          </NavLink>
          <div className={s.navlinks}>
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

// "", "", "", "";
