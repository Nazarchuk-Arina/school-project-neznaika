const Options = ({ feedback, totalFeedback, handleClickFeedback, reset }) => {
  return (
    <section>
      {Object.keys(feedback).map((option) => (
        <button
          key={option}
          onClick={() => {
            handleClickFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
      {totalFeedback !== 0 && (
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
