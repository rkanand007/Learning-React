const WelcomeMesage = ({ onGetPostClick }) => {
  return (
    <center>
      <h1 className="welcome"> </h1>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">There are no posts</h1>
          <p className="lead">
            To posting anything go to the Create Post section...Happy Sharing
          </p>
        </div>
      </div>
    </center>
  );
};

export default WelcomeMesage;
