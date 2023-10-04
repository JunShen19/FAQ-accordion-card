import arrow from "./assets/images/icon-arrow-down.svg";

// eslint-disable-next-line react/prop-types
const Question = ({ question, ans }) => {
  // const ansText = document.querySelector("ans-text");
  // console.log(ansText);

  return (
    <>
      <div className="question-bar">
        <div className="question-text">{question}</div>
        <img
          className="arrow-img"
          src={arrow}
          alt="Button Icon"
          onClick={(e) => {
            e.currentTarget.parentElement.childNodes[0].classList.toggle(
              "text-selected"
            );
            e.currentTarget.parentElement.nextElementSibling.classList.toggle(
              "d-none"
            );
            e.target.classList.toggle("selected");
          }}
        />
      </div>
      <div className="ans-bar d-none">{ans}</div>
      <hr className="horizontal-line" />
    </>
  );
};

export default Question;
