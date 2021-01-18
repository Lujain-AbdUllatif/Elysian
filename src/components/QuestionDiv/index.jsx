import React, { useState, useEffect } from "react";
import "./style.css";

const QuestionDiv = (props) => {
  return (
    <div className="questionDiv">
      <h1 className="questionContent">{props.question}</h1>
    </div>
  );
};

export default QuestionDiv;
