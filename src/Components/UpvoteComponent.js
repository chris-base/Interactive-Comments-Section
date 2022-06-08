import "../Styles/UpvoteComponentStyles.css";
import upvoteImg from "./assets/icon-plus.svg";
import downvoteImg from "./assets/icon-minus.svg";

const UpvoteComponent = () => {
  return (
    <div id='upvoteContainer'>
      <div id='upvoteButton'>
        <div id='upvoteImg' style={{ backgroundImage: "url(" + upvoteImg + ")" }}></div>
      </div>

      <p id='upvoteCount'>0</p>

      <div id='downvoteButton'>
        <div id='downvoteImg' style={{ backgroundImage: "url(" + downvoteImg + ")" }}></div>
      </div>
    </div>
  );
};

export default UpvoteComponent;
