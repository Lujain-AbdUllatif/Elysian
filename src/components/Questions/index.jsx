import React from "react";
import "./style.css";

const Questions = (props) => {
  return (
    <div className='questions-viewExercises'>
      {props.questions.map(({ question }) => (
        <li>{question}</li>
      ))}
      {console.log(props.questions.length)}
    </div>
  );
};

export default Questions;
