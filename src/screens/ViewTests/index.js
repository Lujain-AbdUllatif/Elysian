import React from "react";
import Line from "../../components/Line";
import TesterHeader from "../../components/TesterHeader";
import TestDetails from "../../components/TestDetails";

import "./style.css";
import Train from "../../images/Train.png";
import burro from "../../images/burro.png";
import chair from "../../images/chair.png";
import car from "../../images/car.png";
import table from "../../images/table.png";
import turtle from "../../images/turtle.png";
const Tests = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"];
// const Exercises = ["Exercise 1", "Exercise 2", "Exercise 3"];
// const images = [Train, burro, chair, car, table, turtle];
const detailsTest = [
  {
    exercise: "Exercise 1",
    src: [Train, burro, chair, car, table, turtle],
  },
  {
    exercise: "Exercise 2",
    src: [Train, burro, chair, car, table, turtle],
  },
  {
    exercise: "Exercise 2",
    src: [Train, burro, chair, car, table, turtle],
  },
  {
    exercise: "Exercise 3",
    src: [Train, burro, chair, car, table, turtle],
  },
  {
    exercise: "Exercise 4",
    src: [Train, burro, chair, car, table, turtle],
  },
  {
    exercise: "Exercise 5",
    src: [Train, burro, chair, car, table, turtle],
  },
];

export default function ViewTests() {
  return (
    <div className="ViewTest">
      <TesterHeader text="View-Tests" />
      {Tests.map((test) => {
        return <Line text={test} />;
      })}
      <div className="main-details-Test">
        {/* {detailsTest.map((detailtest) => {
          <TestDetails text={detailtest.exercise} src={detailtest.src.map(())} />;
        })} */}
      </div>
    </div>
  );
}
