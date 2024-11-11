import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import "modern-normalize";
import { useEffect, useState } from "react";
import Notification from "./Notification/Notification";
import fdBackData from "./../assets/feedback.json";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(
    () => JSON.parse(localStorage.getItem("feedbackData")) ?? fdBackData
  );

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  }, [feedbackData]);

  // sum
  const totalFeedbackData =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const handleClickByOption = (value) => {
    setFeedbackData((prev) => ({
      ...prev,
      [value]: prev[value] + 1,
    }));
  };

  const handleReset = () => {
    const initialFeedback = Object.keys(feedbackData).reduce((acc, option) => {
      acc[option] = 0;
      return acc;
    }, {});

    setFeedbackData(initialFeedback);
  };

  return (
    <div className="container">
      <Description />

      <Options
        feedback={feedbackData}
        totalFeedback={totalFeedbackData}
        handleClickFeedback={handleClickByOption}
        reset={handleReset}
      />

      {totalFeedbackData === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedbackData} totalFeedback={totalFeedbackData} />
      )}
    </div>
  );
};

export default App;
