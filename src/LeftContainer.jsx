import bgPatternDesktop from "./assets/images/bg-pattern-desktop.svg";
import bgBoxDesktop from "./assets/images/illustration-box-desktop.svg";
import bgWomanDesktop from "./assets/images/illustration-woman-online-desktop.svg";

const LeftContainer = () => {
  return (
    <div className="left-container">
      <div className="img-group">
        <img className="box" src={bgBoxDesktop} alt="left-img"></img>
        <img className="layer" src={bgWomanDesktop} alt="left-img"></img>
        <img className="layer" src={bgPatternDesktop} alt="left-img"></img>
      </div>
    </div>
  );
};

export default LeftContainer;
