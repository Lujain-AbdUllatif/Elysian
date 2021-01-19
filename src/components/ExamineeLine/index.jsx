import React, { useState, useEffect } from "react";
import { Clock, Calendar, Award, ViewIcon } from "../../icons";
import { useHistory } from "react-router-dom";
import "./style.css";

const ExamineeLine = (props) => {
  const history = useHistory();
  const { data } = props;

  const handleClick = () => {
    history.push("/examinees-answers");
  };

  return (
    <div className="container-examineeline" onClick={handleClick}>
      <div>
        <text className="txt">{data.name} </text>
      </div>
      <div className="icons-div">
        <div className="examinee-line-icons">
          <Clock className="examinee-line-icon" />
          <text>{data.timer}</text>
        </div>
        <div className="examinee-line-icons">
          <Calendar className="examinee-line-icon" />
          <text>{data.date}</text>
        </div>
        <div className="examinee-line-icons">
          <Award className="examinee-line-icon" />
          <text>{data.score}</text>
        </div>
      </div>
    </div>
  );
};

export default ExamineeLine;
