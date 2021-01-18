import React from "react";
import Line from "../../components/Line";
import Images from "../../components/Images";
import Questions from "../../components/Questions";
import { ScrollIcon } from "../../icons";
import TesterHeader from "../../components/TesterHeader";
import "./style.css";

import Train from "../../images/Train.png";
import burro from "../../images/burro.png";
import chair from "../../images/chair.png";
import car from "../../images/car.png";
import table from "../../images/table.png";
import turtle from "../../images/turtle.png";

const Exercises = [
  "Exercise 1",
  "Exercise 2",
  "Exercise 3",
  "Exercise 4",
  "Exercise 5",
];

const images = [Train, burro, chair, car, table, turtle];
const questions = [
  "We sit it. we sit on it.",
  "We travel by it.",
  "We eat it.",
];

export default function ViewExercises() {
  return (
    <div className="main-container">
      <TesterHeader text="View-Exercises" />
      {Exercises.map((exercise) => {
        return <Line text={exercise} />;
      })}

      <div className="main-details-exercise">
        <div className="main-images">
          {images.map((iamge) => {
            return <Images src={iamge} />;
          })}
        </div>

        <div className="main-questions">
          <ol>
            {questions.map((question) => {
              return <Questions question={question} />;
            })}
          </ol>
        </div>
        <ScrollIcon className="scroll-icon" />
      </div>
    </div>
  );
}
