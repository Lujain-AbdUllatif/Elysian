import React from "react";
import ImageSet from "../ImageSet";

const ExercisesTest = (props) => {
  console.log("ExercisesTest:", props.exercises);

  return (
    <div className="ExercisesTest">
      {props.exercises.map((exercise) => (
        <div className="detailstests">
          {exercise.name}
          <ImageSet className="images" images={exercise.images} />
        </div>
      ))}
    </div>
  );
};
export default ExercisesTest;
