import arrow from "./assets/images/icon-arrow-down.svg";

// eslint-disable-next-line react/prop-types
const Question = ({ question, ans }) => {
  return (
    <>
      <div className="question-bar">
        <div className="question-text">{question}</div>
        <img
          className="arrow-img"
          src={arrow}
          alt="Button Icon"
          onClick={(e) => {
            e.target.classList.toggle("selected");
          }}
        />
      </div>
      <hr className="horizontal-line" />
      <div className="ans-bar d-none">{ans}</div>
    </>
  );
};

export default Question;
