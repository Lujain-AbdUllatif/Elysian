import React from "react";
import "./style.css";
import { TestIcon, ClockIcon } from "../../icons";

export default function ExamineeHeader(props) {
  return (
    <div className="examinee-header-container">
      <div>
        <TestIcon className="examinee-header-icon" />
        Exercise {props.ex_now} / {props.ex_all}
      </div>
      <div>
        {props.time}
        <ClockIcon className="examinee-header-icon" />
      </div>
    </div>
  );
}
