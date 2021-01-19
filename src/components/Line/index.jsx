import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";

import "./style.css";
import ImageSet from "../../components/ImageSet";
import Questions from "../../components/Questions";
import { ScrollIcon } from "../../icons";

import "./style.css";
const iamges = [
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
];

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
      </div>
      {eyeClick ? (
        <div className="main-details-exercise">
          <ImageSet className="images" images={iamges} />

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
