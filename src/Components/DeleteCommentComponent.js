import "../Styles/DeleteCommentStyles.css";
import data from "../data.json";

const DeleteCommentComponent = ({ deleteIndex, setDeleteIndex, deleteCommentVisible, setDeleteCommentVisible }) => {
  console.log(deleteIndex);

  const deleteCommentFunc = () => {
    console.log(deleteIndex[0]);

    if (deleteIndex[1] === -1) {
      data.comments.splice(deleteIndex[0], 1);
    } else {
      data.comments[deleteIndex[0]].replies.splice(deleteIndex[1], 1);
    }

    setDeleteIndex([-1, -1]);
    setDeleteCommentVisible(false);
  };

  return (
    <div id='deleteMainBody' style={deleteCommentVisible ? { display: "flex" } : { display: "none" }}>
      <div id='deleteCommentContainer'>
        <p id='deleteCommentTitleText'>Delete Comment</p>
        <p id='deleteCommentBodyText'>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div id='cancelDeleteButtonContainer'>
          <div
            id='cancelDeleteButton'
            onClick={() => {
              setDeleteIndex([-1, -1]);
              setDeleteCommentVisible(false);
            }}
          >
            <p className='cancelDeleteButtonText'>NO, CANCEL</p>
          </div>
          <div id='deleteConfirmButon' onClick={() => deleteCommentFunc()}>
            <p className='cancelDeleteButtonText'>YES, DELETE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentComponent;
