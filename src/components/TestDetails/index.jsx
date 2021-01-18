import React from "react";
const TestExercises = (props) => {
  return (
    <div>
      <h3>{props.text}</h3>
      <img src={props.src} />
    </div>
  );
};
export default TestExercises;
