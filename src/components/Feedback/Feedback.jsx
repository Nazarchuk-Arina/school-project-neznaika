const Feedback = ({ feedback, totalFeedback }) => {
  const { good, neutral, bad } = feedback;
  return (
    <section>
      <ul>
        <li>good: {good}</li>
        <li>neutral: {neutral}</li>
        <li>bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {Math.round((good / totalFeedback) * 100)}%</li>
      </ul>
    </section>
  );
};

export default Feedback;
