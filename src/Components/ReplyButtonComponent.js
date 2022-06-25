import "../Styles/ReplyButtonStyles.css";
import replyImg from "./assets/icon-reply.svg";
import deleteImg from "./assets/icon-delete.svg";
import editImg from "./assets/icon-edit.svg";

const ReplyButtonComponent = ({
  commentUser,
  replyBoxOpen,
  setReplyBoxOpen,
  setDeleteIndex,
  setDeleteCommentVisible,
  editCommentActive,
  setEditCommentActive,
  index,
  miniIndex,
}) => {
  return (
    <div id='replyContainer'>
      {commentUser === "juliusomo" ? (
        <div id='userDeleteEditContainer'>
          <div
            id='deleteButton'
            onClick={() => {
              setDeleteCommentVisible(true);
              setDeleteIndex([index, miniIndex || miniIndex === 0 ? miniIndex : -1]);
            }}
          >
            <div id='deleteImg' style={{ backgroundImage: "url(" + deleteImg + ")" }} />
            <p id='deleteText'>Delete</p>
          </div>

          <div id='editButton' onClick={() => setEditCommentActive(!editCommentActive)}>
            <div id='editImg' style={{ backgroundImage: "url(" + editImg + ")" }} />
            <p id='editText'>Edit</p>
          </div>
        </div>
      ) : (
        <div id='replyButtonContainer' onClick={() => setReplyBoxOpen(!replyBoxOpen)}>
          <div id='replyImg' style={{ backgroundImage: "url(" + replyImg + ")" }}></div>
          <p id='replyText'>Reply</p>
        </div>
      )}
    </div>
  );
};

export default ReplyButtonComponent;
