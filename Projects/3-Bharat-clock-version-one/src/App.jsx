import "./App.css";

function App() {
  return (
    <div>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </div>
  );
}
import ClockHeading from "./Component/ClockHeading";
import ClockSlogan from "./Component/ClockSlogan";
import ClockTime from "./Component/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";
export default App;
