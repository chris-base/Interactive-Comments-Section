import "../Styles/DeleteCommentStyles.css";

const DeleteCommentComponent = ({ deleteIndex, setDeleteIndex, deleteCommentVisible, setDeleteCommentVisible }) => {
  console.log(deleteIndex);
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
          <div id='deleteConfirmButon'>
            <p className='cancelDeleteButtonText'>YES, DELETE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentComponent;
