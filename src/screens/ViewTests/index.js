import React from "react";
import LineTest from "../../components/LineTest";
import TesterHeader from "../../components/TesterHeader";

import "./style.css";

const Tests = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"];
// const Exercises = ["Exercise 1", "Exercise 2", "Exercise 3"];
// const images = [Train, burro, chair, car, table, turtle];

export default function ViewTests() {
  return (
    <div className="ViewTest">
      <TesterHeader text="View-Tests" />
      {Tests.map((test) => {
        return <LineTest text={test} />;
      })}
    </div>
  );
}
