import logo from "./logo.svg";
import "./App.css";
import Routing from "../src/Router";
import ExamineeList from "./components/ExamineeList";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

function App() {
  return (
    <div>
      <Routing />
      {/* <ExamineeList /> */}
      {/* <TableHeader />
      <TableRow /> */}
    </div>
  );
}

export default App;
