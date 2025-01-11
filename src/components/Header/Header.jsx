import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoTel from "../../assets/images/logo/logo-tel-min.png";
import logoTab from "../../assets/images/logo/logo-tab-min.png";
import logoDesc from "../../assets/images/logo/logo-desc-min.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("lock", !menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("lock");
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link to="/" className={s.title}>
          <img
            src={logoTel}
            srcSet={`${logoTel} 360w, ${logoTab} 768w, ${logoDesc} 1280w`}
            sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
            alt="logo of our book"
          />
        </Link>

        <div
          className={`${s.menuIcon} ${menuOpen ? s.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${s.menuList} ${menuOpen ? s.open : ""}`}>
          <li>
            <NavLink to="/heroes" onClick={closeMenu}>
              Герои
            </NavLink>
          </li>
          <li>
            <NavLink to="/read" onClick={closeMenu}>
              Читать
            </NavLink>
          </li>
          <li>
            <NavLink to="/play" onClick={closeMenu}>
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
