import React, { useEffect, useState } from "react";
import "./style.css";
import { addExercise } from "../../Api/api";

//icons imports
import { PlusIcon } from "../../icons/index";

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
  const [questionsObj, setQArr] = useState({});
  // //functions
  const addPicUploader = () => {
    return setPics((prev) => prev + "+");
  };

  //answersFilled()
  const answersFilled = () => {
    var question;
    for (question in questionsObj) {
      if (!questionsObj[question]["answers"]) return false;
      else if (questionsObj[question]["answers"].length == 0) return false;
    }
    return true;
  };

  //submitHandler()
  const submitHandler = async (e) => {
    e.preventDefault();
    const ok = await answersFilled();
    if (ok) {
      addExercise({
        name: exerciseName,
        images: images,
        questions: Object.values(questionsObj),
      });
    } else {
      alert("Please Make Sure To Fill The Answers For Each Question");
    }
  };

  return (
    <div className="MakeExercise">
      <TesterHeader text="Make Exercise" />\{" "}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          placeholder="Exercise Name..."
          className="name-input"
          onChange={(event) => {
            setExerciseName(event.target.value);
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
                id={i}
                pics={pics}
                setPics={setPics}
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
                questions={questions}
                key={i}
                pics={pics}
                setQArr={setQArr}
                id={i}
                images={images}
              />
            );
          })}
        </div>
        <button
          type="button"
          className="btn add-question-btn"
          onClick={() => {
            setQuestions((prev) => prev + "+");
          }}
        >
          Add Question
        </button>
        <div className="add-exercise-btn-con">
          <button type="submit" className="btn ">
            Add Exercise
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeExercise;
