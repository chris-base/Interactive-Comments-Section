import { useState, useEffect } from "react";
import "../Styles/CommentInfoReplyComponentStyles.css";
import amyrobson from "./assets/avatars/image-amyrobson.png";
import juliusomo from "./assets/avatars/image-juliusomo.png";
import maxblagun from "./assets/avatars/image-maxblagun.png";
import ramsesmiron from "./assets/avatars/image-ramsesmiron.png";
import ReplyButtonComponent from "./ReplyButtonComponent";

const images = {
  amyrobson: amyrobson,
  juliusomo: juliusomo,
  maxblagun: maxblagun,
  ramsesmiron: ramsesmiron,
};

const CommentInfoReplyComponent = ({
  commentUser,
  commentDate,
  replyBoxOpen,
  setReplyBoxOpen,
  setDeleteIndex,
  setDeleteCommentVisible,
  editCommentActive,
  setEditCommentActive,
  index,
  miniIndex,
}) => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindow = () => setClientWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
  });

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

      {clientWidth > 750 ? (
        <ReplyButtonComponent
          commentUser={commentUser}
          replyBoxOpen={replyBoxOpen}
          setReplyBoxOpen={setReplyBoxOpen}
          setDeleteIndex={setDeleteIndex}
          setDeleteCommentVisible={setDeleteCommentVisible}
          editCommentActive={editCommentActive}
          setEditCommentActive={setEditCommentActive}
          index={index}
          miniIndex={miniIndex}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentInfoReplyComponent;
