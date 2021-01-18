import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";
import TestDetails from "../../components/TestDetails";

const detailsTest = ["Exercise 1", "Exercise 2", "Exercise 3"];
const LineTest = (props) => {
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
        <div className="main-details-Test">
          {detailsTest.map((exercise) => {
            <TestDetails exercise={exercise} />;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default LineTest;
