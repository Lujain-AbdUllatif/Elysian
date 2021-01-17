import React from "react";
import Line from "../../components/Line";

import Train from "../../images/Train.png";
import burro from "../../images/burro.png";
import chair from "../../images/chair.png";
import car from "../../images/car.png";
import table from "../../images/table.png";
import turtle from "../../images/turtle.png";
import "./style.css";
const Exercises = [
  "Exercise 1",
  "Exercise 2",
  "Exercise 3",
  "Exercise 4",
  "Exercise 5",
];
const Questions = [
  "We sit in it.we sit on it.",
  "We travel by it.",
  "We  eat it.",
];
const Images = [
  <img src={Train} />,
  <img src={burro} />,
  <img src={chair} />,
  <img src={car} />,
  <img src={table} />,
  <img src={turtle} />,
];

export default function ViewExercises() {
  return (
    <div className="main-container">
      <div className="ViewExercise">
        {Exercises.map((exercise) => {
          return <Line text={exercise} />;
        })}
      </div>
      {/* <div className="Question-forExercise">
        {Images.map((image) => {
          return <ViewDetailsExercise image={image} />;
        })}
        {Questions.map((question) => {
          return <ViewDetailsExercise question={question} />;
        })}
      </div> */}
    </div>
  );
}
