import React, { useState, useEffect } from "react";
import { Clock, Calendar, Award } from "../../icons";
import "./style.css";

const ExamineeLine = (props) => {
  const { data } = props;
  return (
    <div className="container-line">
      <div>
        <text className="txt">{data.name} </text>
      </div>
      <div className="icons-div">
        <div className="icon">
          <Clock />
          <text>{data.timer}</text>
        </div>
        <div className="icon">
          <Calendar />
          <text>{data.date}</text>
        </div>
        <div className="icon">
          <Award />
          <text>{data.score}</text>
        </div>
      </div>
    </div>
  );
};

export default ExamineeLine;
