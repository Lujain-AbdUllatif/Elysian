import logo from "./logo.svg";
import "./App.css";
import Routing from "../src/Router";
import ExamineeLine from "./components/ExamineeLine";

function App() {
  return (
    <div>
      <Routing />
      <ExamineeLine />
    </div>
  );
}

export default App;
