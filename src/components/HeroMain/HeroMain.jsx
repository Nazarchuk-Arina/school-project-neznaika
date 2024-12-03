import s from "./HeroMain.module.css";
import neznaikaTel from "../../assets/images/heroes/neznaika-tel-min.png";
import neznaikaTab from "../../assets/images/heroes/neznaika-tab-min.png";
import neznaikaDesc from "../../assets/images/heroes/neznaika-desc-min.png";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const HeroMain = () => {
  return (
    <div className="container">
      <div className={s.hero__main__inner}>
        <h2>Герои</h2>
        <div className={s.hero__main__wo_heading}>
          <h3 className={s.visually__hidden_f}>Незнайка</h3>
          <div className={s.hero__main__pic_text}>
            <div>
              <img
                src={neznaikaTel}
                srcSet={`${neznaikaTel} 360w, ${neznaikaTab} 768w, ${neznaikaDesc} 1280w`}
                sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
                alt="photo of the hero"
              />
            </div>
            <div>
              <h3 className={s.visually__hidden}>Незнайка</h3>
              <p>
                Незнайка — веселый и неугомонный коротышка с рыжими волосами,
                веснушчатым лицом, в голубой шляпе и яркой одежде. Он любит
                придумывать разные идеи, но часто попадает в смешные и нелепые
                ситуации из-за своей упрямости и невнимательности. Незнайка
                искренний, добрый и всегда стремится помогать друзьям, даже если
                не всегда знает, как это лучше сделать.
              </p>
            </div>
          </div>
        </div>
        <NavLink className={clsx(buildLinkClass, s.link)} to="/heroes">
          Давай познакомимся с другими георями!👇
        </NavLink>
      </div>
    </div>
  );
};

export default HeroMain;
