import clsx from "clsx";
import HeroListItem from "../HeroListItem/HeroListItem";
import s from "./HeroesList.module.css";
import { NavLink } from "react-router-dom";

const HeroesList = ({ heroes }) => {
  return (
    <div className={clsx("container", s.heroes_list__inner)}>
      <h1>Герои</h1>
      <ul className={s.heroes__list}>
        {heroes.map((hero) => (
          <HeroListItem
            key={hero.id}
            name={hero.name}
            tel={hero.tel}
            tab={hero.tab}
            desc={hero.desc}
            description={hero.description}
          />
        ))}
      </ul>
      <NavLink className={s.button} to="/read">
        Узнай героев поближе!
      </NavLink>
    </div>
  );
};

export default HeroesList;
