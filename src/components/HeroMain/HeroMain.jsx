import s from "./HeroMain.module.css";
import neznaika from "./../../assets/images/neznaika-tel-1x.png";

const HeroMain = () => {
  return (
    <div className="container">
      <h2>Герои</h2>
      <div>
        <div>
          <img src={neznaika} alt="Neznaika's photo" />
        </div>
        <h3>Незнайка</h3>
        <p>
          Незнайка находит на улице камень и считает, что этот камень упал с
          Луны. Он отдаёт его Знайке. На следующий день Знайка заметил, что при
          действии на камень магнитного поля камень создаёт невесомость. Знайка
          принял решение сделать ракету и полететь вместе с остальными
          коротышками на Луну, предварительно устроив спор с астрономом
          Стекляшкиным,
        </p>
      </div>
    </div>
  );
};

export default HeroMain;
