import s from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle(s.lock, !menuActive);
  };

  const smoothScroll = (e, blockID) => {
    e.preventDefault();
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // Закрытие меню после клика
    setMenuActive(false);
    document.body.classList.remove(s.lock);
  };

  return (
    <header className={s.header}>
      <div className={classNames(s.container, s.headerInner)}>
        <a href="./index.html" className={s.headerLogo}>
          Lloyd<span>Jefferson.</span>
        </a>

        <div
          className={slcx(s.menuIcon, menuActive && s.menuIconActive)}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav
          className={classNames(s.menuBody, { [s.menuBodyActive]: menuActive })}
        >
          <a href="./index.html" className={s.headerLogoMenu}>
            Lloyd<span>Jefferson.</span>
          </a>

          <ul className={s.menuList}>
            <li>
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
            </li>
            <li className={s.menuItem}>
              <a
                href="#about-me"
                className={s.menuLink}
                onClick={(e) => smoothScroll(e, "about-me")}
              >
                About me
              </a>
            </li>
            <li className={s.menuItem}>
              <a
                href="#my-projects"
                className={s.menuLink}
                onClick={(e) => smoothScroll(e, "my-projects")}
              >
                Projects
              </a>
            </li>
            <li className={s.menuItem}>
              <a
                href="#contacts"
                className={s.menuLink}
                onClick={(e) => smoothScroll(e, "contacts")}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// const Header = () => {
//   return (
//     <header className={s.header}>
//       <div className={s.header__inner}>
//         <div className={s.picture}></div>
//         <a href="./index.html" className={s.header__logo}>
//           Lloyd
//         </a>

//         <div className={s.menu__icon}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <nav className={s.menu__body}>
//           <a href="./index.html" className={s.header__logo__menu}>
//             Lloyd
//           </a>

//           <ul className={s.menu__list}>
//             <li>
//               <input type="checkbox" id="switch" />
//               <label for="switch">Toggle</label>
//             </li>
//             <li className={s.menu__item}>
//               <a href="#about-me" className={s.menu__link}>
//                 Читать
//               </a>
//             </li>
//             <li className={s.menu__item}>
//               <a href="#my-projects" className={s.menu__link}>
//                 Слушать
//               </a>
//             </li>
//             <li className={s.menu__item}>
//               <a href="#contacts" className={s.menu__link}>
//                 Герои
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
