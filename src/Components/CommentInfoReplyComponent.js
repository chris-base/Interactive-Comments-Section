import "../Styles/CommentInfoReplyComponentStyles.css";
import amyrobson from "./assets/avatars/image-amyrobson.png";
import juliusomo from "./assets/avatars/image-juliusomo.png";
import maxblagun from "./assets/avatars/image-maxblagun.png";
import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import replyImg from "./assets/icon-reply.svg";
import deleteImg from "./assets/icon-delete.svg";
import editImg from "./assets/icon-edit.svg";

const images = {
  amyrobson: amyrobson,
  juliusomo: juliusomo,
  maxblagun: maxblagun,
  ramsesmiron: ramsesmiron,
};

const CommentInfoReplyComponent = ({ commentUser, commentDate }) => {
  return (
    <div id='commentInfoReplyContainer'>
      <div id='commentInfoContainer'>
        <div id='userImg' style={{ backgroundImage: "url(" + images[`${commentUser}`] + ")" }}></div>
        <p id='userName'>{commentUser}</p>

        {commentUser === "juliusomo" ? (
          <div id='currUserTagContainer'>
            <p id='currUserTagText'>you</p>
          </div>
        ) : (
          <></>
        )}

        <p id='commentTime'>{commentDate}</p>
      </div>

      <div id='replyContainer'>
        {commentUser === "juliusomo" ? (
          <div id='userDeleteEditContainer'>
            <div id='deleteButton'>
              <div id='deleteImg' style={{ backgroundImage: "url(" + deleteImg + ")" }} />
              <p id='deleteText'>Delete</p>
            </div>

            <div id='editButton'>
              <div id='editImg' style={{ backgroundImage: "url(" + editImg + ")" }} />
              <p id='editText'>Edit</p>
            </div>
          </div>
        ) : (
          <div id='replyButtonContainer'>
            <div id='replyImg' style={{ backgroundImage: "url(" + replyImg + ")" }}></div>
            <p id='replyText'>Reply</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentInfoReplyComponent;
