function TodoItem2() {
  let TodoName = "Reading book";
  let Date = "05/04/2024";

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{Date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kb-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
