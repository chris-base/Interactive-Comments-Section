import "../Styles/CommentInfoReplyComponentStyles.css";
import amyRobson from "./assets/avatars/image-amyrobson.png";
import replyImg from "./assets/icon-reply.svg";

const CommentInfoReplyComponent = () => {
  return (
    <div id='commentInfoReplyContainer'>
      <div id='commentInfoContainer'>
        <div id='userImg' style={{ backgroundImage: "url(" + amyRobson + ")" }}></div>
        <p id='userName'>amyrobson</p>
        <p id='commentTime'>1 week ago</p>
      </div>

      <div id='replyContainer'>
        <button id='replyButtonContainer'>
          <div id='replyImg' style={{ backgroundImage: "url(" + replyImg + ")" }}></div>
          <p id='replyText'>Reply</p>
        </button>
      </div>
    </div>
  );
};

export default CommentInfoReplyComponent;
