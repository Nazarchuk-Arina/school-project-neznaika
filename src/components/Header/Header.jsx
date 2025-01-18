import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoTel from "../../assets/images/logo/logo-tel-min.png";
import logoTab from "../../assets/images/logo/logo-tab-min.png";
import logoDesc from "../../assets/images/logo/logo-desc-min.png";

{
  /* <NavLink to="/" className={styles.title}>
  <img
    src={logoTel}
    srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
    sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
    alt="logo of our book"
  />
</NavLink>; */
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to="/" className={s.title}>
          <img
            src={logoTel}
            srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
            sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
            alt="logo of our book"
          />
        </NavLink>
      </div>
      <button className={s.burger} onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={`${s.nav} ${menuOpen ? s.navOpen : ""}`}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink
              to="/heroes"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.activeLink}` : s.navLink
              }
            >
              Герои
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/read"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.activeLink}` : s.navLink
              }
            >
              Читать
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/play"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.activeLink}` : s.navLink
              }
            >
              Играть
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// {
//   "id": 8,
//   "title": "Первый день на Луне. Чaсть II.",
//   "text": [
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     ""
//   ]
// },
// {
//   "id": 6,
//   "title": "Отлет",
//   "text": []
// }
