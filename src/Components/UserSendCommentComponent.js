import { useState, useRef } from "react";
import "../Styles/UserSendCommentStyles.css";
import userImg from "./assets/avatars/image-juliusomo.png";

const UserSendCommentComponent = ({ replyingToUser, setReplyBoxOpen }) => {
  const [commentText, setCommentText] = useState(replyingToUser !== "" ? `@${replyingToUser}, ` : "");

  const inputRef = useRef(null);

  console.log(commentText);

  return (
    <div id='currUserContainer'>
      <div id='currentUserImg' style={{ backgroundImage: "url(" + userImg + ")" }}></div>

      <form id='addCommentForm' onSubmit={() => {}} onClick={() => inputRef.current && inputRef.current.focus()}>
        <textarea
          id='addCommentInput'
          ref={inputRef}
          type='text'
          placeholder='Add a comment...'
          onChange={(e) => setCommentText(e.target.value)}
          input={commentText}
          value={commentText}
        />
      </form>

      <div id='sendCancelContainer'>
        <div id='sendCommentButton'>SEND</div>
        {replyingToUser !== "" ? (
          <div id='cancelCommentButton' onClick={() => setReplyBoxOpen(false)}>
            CANCEL
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserSendCommentComponent;
