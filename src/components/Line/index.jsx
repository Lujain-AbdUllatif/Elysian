import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";

import "./style.css";
const Line = (props) => {
  const [eyeClick, setEyeClick] = React.useState(false);
  const [deleteClick, setDeleteClick] = React.useState(false);
  const [editClick, setEditClick] = React.useState(false);
  const handleClick = () => {
    setEyeClick(!eyeClick);
    setDeleteClick(!deleteClick);
    setEditClick(!editClick);
  };
  return (
    <div className="page-view-line">
      <h3>{props.text}</h3>
      <div className="icons-line">
        <button onClick={handleClick} className="line-btns">
          <DeleteIcon />
        </button>
        <button onClick={handleClick} className="line-btns">
          <EditIcon />
        </button>

        <button onClick={handleClick} className="line-btns">
          <ViewIcon />
        </button>
      </div>
      {eyeClick && <div className="details">done </div>}
    </div>
  );
};
export default Line;
