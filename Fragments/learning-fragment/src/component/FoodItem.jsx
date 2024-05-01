const foodItems = () => {
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
        <>
          <li className="list-group-item">{item}</li>
          <button>Buy</button>
        </>
        //<Item foodI
      ))}
    </ul>
  );
};
export default foodItems;
