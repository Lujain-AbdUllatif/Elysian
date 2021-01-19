import React, { useState } from "react";
import Line from "../../components/Line";

import TesterHeader from "../../components/TesterHeader";
import "./style.css";

export default function ViewExercises() {
  const [exercises, setExercises] = useState([
    "Exercise 1",
    "Exercise 2",
    "Exercise 3",
    "Exercise 4",
    "Exercise 5",
  ]);

  const deleteExecrise = (index) => {
    exercises[index] = "delete";
    setExercises((prevExes) => prevExes.filter((exe) => exe !== "delete"));
  };
  return (
    <div className="main-container">
      <TesterHeader text="View-Exercises" />
      {exercises.map((exercise, i) => {
        return (
          <Line
            key={exercise}
            index={i}
            text={exercise}
            onDelete={deleteExecrise}
          />
        );
      })}
    </div>
  );
}
