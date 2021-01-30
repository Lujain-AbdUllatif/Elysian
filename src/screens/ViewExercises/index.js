import React, { useEffect, useState } from "react";

import Line from "../../components/Line";
import { viewExercise } from "../../Api/api";
import TesterHeader from "../../components/TesterHeader";
import "./style.css";

export default function ViewExercises() {
  const [exercises, setExercises] = useState([]);

  const deleteExecrise = (index) => {
    exercises[index] = "delete";
    setExercises((prevExes) => prevExes.filter((exe) => exe !== "delete"));
  };
  useEffect(async () => {
    const exercises = await viewExercise();
    setExercises(exercises);
  }, []);

  return (
    <div className="main-container">
      <TesterHeader text="View-Exercises" />
      {exercises &&
        exercises.map((exercise, i) => {
          return (
            <Line
              key={exercise.name}
              index={i}
              text={exercise.name}
              onDelete={deleteExecrise}
            />
          );
        })}
    </div>
  );
}
