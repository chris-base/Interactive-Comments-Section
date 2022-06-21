import { useState } from "react";
import "../Styles/CommentComponentStyles.css";
import UpvoteComponent from "./UpvoteComponent";
import CommentInfoReplyComponent from "./CommentInfoReplyComponent";
import UserSendCommentComponent from "./UserSendCommentComponent";
import AddEditCommentFormComponent from "./AddEditCommentFormComponent";

const CommentComponent = ({ comment, forceUpdate, setForceUpdate, setDeleteIndex, setDeleteCommentVisible, index, miniIndex }) => {
  const [replyBoxOpen, setReplyBoxOpen] = useState(false);
  const [editCommentActive, setEditCommentActive] = useState(false);

  const [commentText, setCommentText] = useState(comment.content);

  const updateComment = () => {
    if (commentText.length > 1) {
      comment.content = commentText;

      setEditCommentActive(false);
    }
  };

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
            setDeleteIndex={setDeleteIndex}
            setDeleteCommentVisible={setDeleteCommentVisible}
            editCommentActive={editCommentActive}
            setEditCommentActive={setEditCommentActive}
            index={index}
            miniIndex={miniIndex}
          />

          {editCommentActive ? (
            <div id='updateCommentContainer'>
              <AddEditCommentFormComponent addingComment={false} replyBoxOpen={true} commentText={commentText} setCommentText={setCommentText} />
              <div id='updateCommentButton' onClick={() => updateComment()}>
                <p id='updateCommentButtonText'>UPDATE</p>
              </div>
            </div>
          ) : (
            <p id='commentBodyText'>
              {comment.replyingTo ? <span id='replyingToAtText'>@{comment.replyingTo} </span> : ""}
              {comment.content}
            </p>
          )}
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
              return (
                <CommentComponent
                  comment={reply}
                  forceUpdate={forceUpdate}
                  setForceUpdate={setForceUpdate}
                  setDeleteIndex={setDeleteIndex}
                  setDeleteCommentVisible={setDeleteCommentVisible}
                  index={index}
                  miniIndex={miniIndex}
                  key={miniIndex}
                />
              );
            })
          ) : (
            <></>
          )}

          {replyBoxOpen ? (
            <UserSendCommentComponent
              replyingToUser={comment.user.username}
              index={index}
              replyBoxOpen={replyBoxOpen}
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
