import s from "./ReadDetails.module.css";

const ReadDetails = () => {
  return (
    <div>
      <ul className={s.chapter__list}>
        <li>
          <Link className={s.chapter__item} to={"chapter"}>
            chapter
          </Link>
        </li>
        <li>adfodkvfplv</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default ReadDetails;
