import { useState, useRef } from "react";
import "../Styles/UserSendCommentStyles.css";
import userImg from "./assets/avatars/image-juliusomo.png";

const UserSendCommentComponent = () => {
  const [commentText, setCommentText] = useState("");

  const inputRef = useRef(null);

  return (
    <div id='currUserContainer'>
      <div id='currentUserImg' style={{ backgroundImage: "url(" + userImg + ")" }}></div>

      <form id='addCommentForm' onSubmit={() => {}} onClick={() => inputRef.current && inputRef.current.focus()}>
        <input
          id='addCommentInput'
          ref={inputRef}
          type='text'
          placeholder='Add a comment...'
          onChange={(e) => setCommentText(e.target.value)}
          input={commentText}
        />
      </form>

      <div id='sendCommentButton'>SEND</div>
    </div>
  );
};

export default UserSendCommentComponent;
