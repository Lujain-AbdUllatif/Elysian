import React from "react";
import "./style.css";
import ScrollToTop from "../ScrollToTop";

const Questions = (props) => {
  return (
    <div>
      <ScrollToTop questions={props.questions} />
      {props.questions.map(({ question }) => (
        <li>{question}</li>
      ))}
      {console.log(props.questions.length)}
    </div>
  );
};

export default Questions;
