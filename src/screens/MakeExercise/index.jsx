import React, { useState } from "react";
import "./style.css";

//icons imports
import { PlusIcon, MinusIcon } from "../../icons/index";

//components imports
import PicUpload from "../../components/PicUpload";
import Question from "../../components/Question";
import TesterHeader from "../../components/TesterHeader";
const MakeExercise = () => {
  //states
  const [pics, setPics] = useState("+");
  const [questions, setQuestions] = useState("+");
  //functions
  const addPicUploader = () => {
    setPics((prev) => prev + "+");
  };
  return (
    <div className="MakeExercise">
      <TesterHeader text="Make Exercise" />
      <input placeholder="Exercise Name..." className="name-input" />
      <h4 className="sub-title">Insert pictures</h4>
      <div className="pic-uploaders-container">
        {Array.from(pics).map((pic, i) => {
          return <PicUpload key={i} setPics={setPics} picNum={i + 1} />;
        })}
        <div className="plus-container">
          <PlusIcon
            className="plus-icon"
            size="50px"
            cursor="pointer"
            onClick={addPicUploader}
          />
        </div>
      </div>
      <h4 className="sub-title">Insert questions</h4>
      <div className="questions-section">
        {Array.from(questions).map((question, i) => {
          return <Question key={i} pics={pics} />;
        })}
      </div>
      <button
        className="btn add-question-btn"
        onClick={() => setQuestions((prev) => prev + "+")}
      >
        Add Question
      </button>
      <div className="add-exercise-btn-con">
        <button className="btn ">Add Exercise</button>
      </div>
    </div>
  );
};

export default MakeExercise;
