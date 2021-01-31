import React from "react";
import "./style.css";

export default function ExerciseQuestion({ ex_question_now, ex_question_all }) {
  const ex_all_list = [];
  let i = 1;
  while (i <= ex_question_all) {
    ex_all_list.push(i);
    i++;
  }
  console.log("hereeee", ex_question_now);
  const list = ex_all_list.map((ex) => {
    return ex === parseInt(ex_question_now) ? (
      <span className="ex-now">{ex}</span>
    ) : (
      <span>{ex}</span>
    );
  });

  return <div className="exercise-question-container">{list}</div>;
}
