import { useRef, useEffect } from "react";
import "../Styles/AddEditCommentFormStyles.css";

const AddEditCommentFormComponent = ({ addingComment, replyBoxOpen, commentText, setCommentText }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }, [replyBoxOpen]);

  return (
    <form
      id='addCommentForm'
      onClick={() => inputRef.current && inputRef.current.focus()}
      style={addingComment ? { width: "70%" } : { width: "100%" }}
    >
      <textarea
        autoFocus={replyBoxOpen}
        id='addCommentInput'
        ref={inputRef}
        type='text'
        placeholder={addingComment ? "Add a comment..." : "Edit comment..."}
        onChange={(e) => setCommentText(e.target.value)}
        input={commentText}
        value={commentText}
      />
    </form>
  );
};

export default AddEditCommentFormComponent;
