import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";
import Images from "../../components/Images";
import Questions from "../../components/Questions";
import { ScrollIcon } from "../../icons";
import Train from "../../images/Train.png";
import burro from "../../images/burro.png";
import chair from "../../images/chair.png";
import car from "../../images/car.png";
import table from "../../images/table.png";
import turtle from "../../images/turtle.png";
import "./style.css";
const images = [Train, burro, chair, car, table, turtle];
const questions = [
  "We sit it. we sit on it.",
  "We travel by it.",
  "We eat it.",
];
const Line = (props) => {
  const [eyeClick, setEyeClick] = React.useState(false);
  const [deleteClick, setDeleteClick] = React.useState(false);
  const [editClick, setEditClick] = React.useState(false);
  const handleClick = () => {};

  const handleShowExe = () => {
    setEyeClick((prev) => !prev);
  };
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
        {eyeClick && <div className="details"> </div>}
      </div>
      {eyeClick ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Line;
