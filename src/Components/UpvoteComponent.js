import { useState } from "react";
import "../Styles/UpvoteComponentStyles.css";
import upvoteImg from "./assets/icon-plus.svg";
import downvoteImg from "./assets/icon-minus.svg";

const UpvoteComponent = ({ upvoteCount }) => {
  const [score, setScore] = useState(0);

  return (
    <div id='upvoteContainer'>
      <div id='upvoteButton' onClick={() => (score === 1 ? setScore(0) : setScore(1))}>
        <div id='upvoteImg' style={{ backgroundImage: "url(" + upvoteImg + ")" }}></div>
      </div>

      <p id='upvoteCount' style={score === 0 ? { color: "#5457b6" } : score === 1 ? { color: "#22e025" } : { color: "#ed6468" }}>
        {upvoteCount + score}
      </p>

      <div id='downvoteButton' onClick={() => (score === -1 ? setScore(0) : setScore(-1))}>
        <div id='downvoteImg' style={{ backgroundImage: "url(" + downvoteImg + ")" }}></div>
      </div>
    </div>
  );
};

export default UpvoteComponent;
