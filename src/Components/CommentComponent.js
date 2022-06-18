import { useState } from "react";
import "../Styles/CommentComponentStyles.css";
import UpvoteComponent from "./UpvoteComponent";
import CommentInfoReplyComponent from "./CommentInfoReplyComponent";
import UserSendCommentComponent from "./UserSendCommentComponent";

const CommentComponent = ({ comment, forceUpdate, setForceUpdate, index }) => {
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);

  return (
    <div className='mainCommentComponent' style={comment.replyingTo ? {} : {}}>
      <div className='commentContainer'>
        <div id='upvoteDiv'>
          <UpvoteComponent upvoteCount={comment.score} />
        </div>

        <div id='commentBody'>
          <CommentInfoReplyComponent
            commentUser={comment.user.username}
            commentDate={comment.createdAt}
            replyBoxOpen={replyBoxOpen}
            setReplyBoxOpen={setReplyBoxOpen}
          />

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
            comment.replies.map((reply, miniIndex) => {
              return <CommentComponent comment={reply} forceUpdate={forceUpdate} setForceUpdate={setForceUpdate} index={index} key={miniIndex} />;
            })
          ) : (
            <></>
          )}

          {replyBoxOpen ? (
            <UserSendCommentComponent
              replyingToUser={comment.user.username}
              index={index}
              setReplyBoxOpen={setReplyBoxOpen}
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
