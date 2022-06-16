import { useState, useRef } from "react";
import "../Styles/UserSendCommentStyles.css";
import data from "../data.json";
import userImg from "./assets/avatars/image-juliusomo.png";
import userImgWebp from "./assets/avatars/image-juliusomo.webp";

const UserSendCommentComponent = ({ replyingToUser, setReplyBoxOpen, forceUpdate, setForceUpdate }) => {
  const [commentText, setCommentText] = useState(replyingToUser !== "" ? `@${replyingToUser}, ` : "");

  const inputRef = useRef(null);

  console.log(commentText);

  const addCommentToData = () => {
    if (commentText.length > 1) {
      data.comments.push({
        id: 1,
        content: commentText,
        createdAt: "Today",
        score: 0,
        user: {
          image: {
            png: userImg,
            webp: userImgWebp,
          },
          username: data.currentUser.username,
        },
        replies: [],
      });

      setCommentText("");
      setForceUpdate(!forceUpdate);
    }
  };

  return (
    <div id='currUserContainer'>
      <div id='currentUserImg' style={{ backgroundImage: "url(" + userImg + ")" }}></div>

      <form id='addCommentForm' onSubmit={() => addCommentToData()} onClick={() => inputRef.current && inputRef.current.focus()}>
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
        <div id='sendCommentButton' onClick={() => addCommentToData()}>
          SEND
        </div>
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
