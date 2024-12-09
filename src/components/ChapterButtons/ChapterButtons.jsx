import { NavLink } from "react-router-dom";
const ChapterButtons = ({ readData }) => {
  return (
    <section>
      <ul>
        {readData.map(({ id }) => (
          <li key={id}>
            <NavLink to={`/read/${id}`}>{id}</NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ChapterButtons;
