import s from "./HeroListItem.module.css";

const HeroListItem = ({ name, description, tel, tab, desc }) => {
  return (
    <li className={s.heroes__item}>
      <div className={s.hero__main__wo_heading}>
        <h3 className={s.visually__hidden_f}>{name}</h3>
        <div className={s.hero__main__pic_text}>
          <div>
            <img
              src={tel}
              srcSet={`${tel} 360w, ${tab} 768w, ${desc} 1280w`}
              sizes="(max-width: 360px) 100vw, (max-width: 768px) 50vw, (min-width: 1280px) 33vw"
              alt="photo of the hero"
            />
          </div>
          <div>
            <h3 className={s.visually__hidden}>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default HeroListItem;
