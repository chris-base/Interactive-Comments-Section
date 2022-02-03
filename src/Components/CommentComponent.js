import "../Styles/CommentComponentStyles.css";
import UpvoteComponent from "./UpvoteComponent";
import CommentInfoReplyComponent from "./CommentInfoReplyComponent";

const CommentComponent = () => {
  return (
    <div className='commentContainer'>
      <div id='upvoteDiv'>
        <UpvoteComponent />
      </div>

      <div id='commentBody'>
        <CommentInfoReplyComponent />

        <p id='commentBodyText'>
          Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </div>
    </div>
  );
};

export default CommentComponent;
