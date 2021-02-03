import React from "react";
import "./style.css";
import { TestIcon, ClockIcon } from "../../icons";

export default function ExamineeHeader(props) {
  return (
    <div className="examinee-header-container">
      <div>
        <TestIcon className="examinee-header-icon" />
        <h2>
          Exercise {props.ex_now} / {props.ex_all}
        </h2>
      </div>
      <div>
        {props.time}
        <ClockIcon className="examinee-header-icon" />
      </div>
    </div>
  );
}
