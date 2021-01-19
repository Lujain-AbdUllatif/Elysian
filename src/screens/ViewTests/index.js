import React, { useState } from "react";
import LineTest from "../../components/LineTest";
import TesterHeader from "../../components/TesterHeader";

import "./style.css";

export default function ViewTests() {
  const [Tests, setTests] = React.useState([
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
  ]);
  const deleteTest = (index) => {
    Tests[index] = "delete";
    setTests((prevExes) => prevExes.filter((exe) => exe !== "delete"));
  };
  return (
    <div className="ViewTest">
      <TesterHeader text="View-Tests" />
      {Tests.map((test, i) => {
        return (
          <LineTest key={test} index={i} text={test} onDelete={deleteTest} />
        );
      })}
    </div>
  );
}
