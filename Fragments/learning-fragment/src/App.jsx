/* eslint-disable react/jsx-key */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
function App() {
  let foodItems = [
    "Dal",
    "Green Vegetables ",
    "Milk",
    "Fruits",
    "Salad",
    "Ghee",
  ];
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ul className="list-group">
          {foodItems.map((item) => (
            <li className="list-group-item">{item}</li>
          ))}
        </ul>
      </Container>
      <Container>This is the list of Healthy food</Container>
    </>
  );
}

export default App;
