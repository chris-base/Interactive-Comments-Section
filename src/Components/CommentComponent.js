import "../Styles/CommentComponentStyles.css";
import UpvoteComponent from "./UpvoteComponent";
import CommentInfoReplyComponent from "./CommentInfoReplyComponent";

const CommentComponent = ({ comment }) => {
  return (
    <div className='mainCommentComponent' style={comment.replyingTo ? {} : {}}>
      <div className='commentContainer'>
        <div id='upvoteDiv'>
          <UpvoteComponent upvoteCount={comment.score} />
        </div>

        <div id='commentBody'>
          <CommentInfoReplyComponent commentUser={comment.user.username} commentDate={comment.createdAt} />

          <p id='commentBodyText'>{comment.content}</p>
        </div>
      </div>

      <div id='repliesContainer'>
        {comment.replies && comment.replies.length > 0 ? (
          <div id='replyLineContainer'>
            <div id='replyLine'></div>
          </div>
        ) : (
          <></>
        )}

        <div id='repliesCommentsContainer'>
          {comment.replies && comment.replies.length > 0 ? (
            comment.replies.map((reply, index) => {
              return <CommentComponent comment={reply} key={index} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
