import React from "react";
import ImageSet from "../ImageSet";
import "./style.css";

const ExercisesTest = (props) => {
  console.log("ExercisesTest:", props.exercises);

  return (
    <div className="ExercisesTest">
      {props.exercises.map((exercise) => (
        <div className="detailstests">
          <div className="exercisename">{exercise.name}</div>
          <ImageSet className="images" images={exercise.images} />
        </div>
      ))}
    </div>
  );
};
export default ExercisesTest;
