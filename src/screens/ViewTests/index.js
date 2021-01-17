import React from "react";
import Line from "../../components/Line";

import "./style.css";

const Tests = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"];

export default function ViewTests() {
  return (
    <div className="ViewTest">
      {Tests.map((test) => {
        return <Line text={test} />;
      })}
    </div>
  );
}
