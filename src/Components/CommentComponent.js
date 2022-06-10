import "../Styles/CommentComponentStyles.css";
import UpvoteComponent from "./UpvoteComponent";
import CommentInfoReplyComponent from "./CommentInfoReplyComponent";

const CommentComponent = ({ comment, index }) => {
  return (
    <div className='commentContainer'>
      <div id='upvoteDiv'>
        <UpvoteComponent upvoteCount={comment.score} />
      </div>

      <div id='commentBody'>
        <CommentInfoReplyComponent commentUser={comment.user.username} commentDate={comment.createdAt} />

        <p id='commentBodyText'>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
