import React from "react";
import Line from "../../components/Line";

import "./style.css";

const Tests = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"];
const Exercises = ["Exercise 1", "Exercise 2", "Exercise 3"];
export default function ViewTests() {
  return (
    <div className="ViewTest">
      {Tests.map((test) => {
        return <Line text={test} />;
      })}
    </div>
  );
}
