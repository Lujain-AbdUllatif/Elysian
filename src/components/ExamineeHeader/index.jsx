import React from "react";
import "./style.css";
import { TestIcon, ClockIcon } from "../../icons";

export default function ExamineeHeader(props) {
  return (
    <div className="examinee-header-container">
      <div className="examinee-header-exercise">
        <TestIcon />
        Exercise 1 / 8
      </div>
      <div className="examinee-header-clock">
        Time
        <ClockIcon />
      </div>
    </div>
  );
}
