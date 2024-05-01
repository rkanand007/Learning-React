// eslint-disable-next-line react/prop-types
function TodoItem1({ TodoName, Date, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{Date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kb-button"
            onClick={() => onDeleteClick(TodoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}  

export default TodoItem1;
