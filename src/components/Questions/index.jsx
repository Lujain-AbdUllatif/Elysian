import React from "react";
import "./style.css";
const Questions = (props) => {
  return (
    <div className="questions-viewExercises">
      <li>{props.question}</li>
    </div>
  );
};
export default Questions;
