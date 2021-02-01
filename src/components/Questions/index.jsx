import React from "react";
import "./style.css";
const Questions = (props) => {
  return (
    <div className="questions-viewExercises">
      {props.questions.map(({ question }) => (
        <li>{question}</li>
      ))}
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </div>
  );
};
export default Questions;
