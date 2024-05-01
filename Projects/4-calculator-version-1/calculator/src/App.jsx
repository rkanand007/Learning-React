import "./App.module.css";
import Display from "./component/Display";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
