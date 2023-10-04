import Question from "./Question";
import questionsJSON from "../questions.json";

const RightContainer = () => {
  return (
    <div className="right-container">
      <h1>FAQ</h1>
      {questionsJSON.faq.map((q, index) => {
        return (
          <div key={index}>
            <Question question={q.question} ans={q.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default RightContainer;
