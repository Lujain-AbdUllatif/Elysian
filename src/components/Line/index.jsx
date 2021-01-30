import React, { useEffect, useState } from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";
import "./style.css";
import ImageSet from "../../components/ImageSet";
import Questions from "../../components/Questions";
import { viewExercise } from "../../Api/api";
import { ScrollIcon } from "../../icons";
import "./style.css";

const Line = (props) => {
  const [data, setData] = React.useState([]);
  const [eyeClick, setEyeClick] = React.useState(false);
  const [deleteClick, setDeleteClick] = React.useState(false);
  const [editClick, setEditClick] = React.useState(false);
  const handleClick = () => {};

  const handleShowExe = () => {
    setEyeClick((prev) => !prev);
  };
  useEffect(async () => {
    const data = await viewExercise();
    console.log("data Exercise:", data);
    // console.log(
    //   "array of questions:",
    //   data.map((q) => q.questions.map((questions) => questions.question))
    // );
    // console.log(
    //   "array of images ",
    //   data.map((i) => i.images)
    // );
    setData(data);
  }, []);
  return (
    <div>
      <div className="page-view-line">
        <h3>{props.text}</h3>
        <div className="icons-line">
          <button
            onClick={() => props.onDelete(props.index)}
            className="line-btns"
          >
            <DeleteIcon />
          </button>
          <button onClick={handleClick} className="line-btns">
            <EditIcon />
          </button>

          <button onClick={handleShowExe} className="line-btns">
            <ViewIcon />
          </button>
        </div>
      </div>

      {eyeClick ? (
        <div className="main-details-exercise">
          {data.map((images) => {
            return <ImageSet className="images" images={images.images} />;
          })}
          <div className="main-questions">
            <ol>
              {data.map((q) => {
                return q.questions.map((question, i) => {
                  {
                    console.log("question:", question.question);
                  }
                  return (
                    <Questions
                      key={question.question}
                      index={i}
                      question={question.question}
                    />
                  );
                });
              })}
            </ol>
          </div>
          <ScrollIcon className="scroll-icon" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Line;
