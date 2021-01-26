import React, { useEffect, useState } from "react";
import "./style.css";
import { addExercise } from "../../Api/api";

//icons imports
import { PlusIcon, MinusIcon } from "../../icons/index";

//components imports
import PicUpload from "../../components/PicUpload";
import Question from "../../components/Question";
import TesterHeader from "../../components/TesterHeader";
const MakeExercise = () => {
  // //states
  const [pics, setPics] = useState("+");
  const [questions, setQuestions] = useState("+");
  const [exerciseName, setExerciseName] = useState("");
  const [images, setImages] = useState([]);
  const [values, setValues] = useState({
    question: "",
    keyword: "",
    answers: [],
  });
  const [questionsArr, setQArr] = useState([]);

  // //functions
  const addPicUploader = () => {
    return setPics((prev) => prev + "+");
  };
  useEffect(() => {
    //console.log("arrayOfImages", images);
  });
  console.log("arrayOfImages", images);

  return (
    <div className="MakeExercise">
      <TesterHeader text="Make Exercise" />
      <input
        placeholder="Exercise Name..."
        className="name-input"
        onChange={(event) => {
          setExerciseName(event.target.value);
          console.log("===>", exerciseName);
        }}
      />
      <h4 className="sub-title">Insert pictures</h4>
      <div className="pic-uploaders-container">
        {Array.from(pics).map((pic, i) => {
          return (
            <PicUpload
              key={i}
              setPics={setPics}
              picNum={i + 1}
              setImages={setImages}
              pics={pics}
            />
          );
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
          return (
            <Question
              key={i}
              pics={pics}
              values={values}
              setValues={setValues}
            />
          );
        })}
      </div>
      <button
        className="btn add-question-btn"
        onClick={() => {
          setQuestions((prev) => prev + "+");
          setQArr((questions) => [...questions, values]);
          console.log("questionArr", questionsArr);
        }}
      >
        Add Question
      </button>
      <div className="add-exercise-btn-con">
        <button
          className="btn "
          onClick={() => {
            addExercise({
              name: exerciseName,
              images: images,
              questions: questionsArr,
            });
            console.log("Data", {
              name: exerciseName,
              images: images,
              questions: questionsArr,
            });
          }}
        >
          Add Exercise
        </button>
      </div>
    </div>
  );
};

export default MakeExercise;
