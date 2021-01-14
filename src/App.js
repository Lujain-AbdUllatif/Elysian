import logo from "./logo.svg";
import "./App.css";
import Routing from "../src/Router";
import ExamineeList from "./components/ExamineeList";

function App() {
  return (
    <div>
      <Routing />
      <ExamineeList />
    </div>
  );
}

export default App;
