import "../Styles/UpvoteComponentStyles.css";

const UpvoteComponent = () => {
  return (
    <div id='upvoteContainer'>
      <div id='upvoteButton'>
        <p id='upvoteText'>+</p>
      </div>

      <p id='upvoteCount'>0</p>

      <div id='downvoteButton'>
        <p id='downvoteText'>-</p>
      </div>
    </div>
  );
};

export default UpvoteComponent;
