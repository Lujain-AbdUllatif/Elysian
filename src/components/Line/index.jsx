import React from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";

import "./style.css";
const Line = (props) => {
  return (
    <div className="page-view-line">
      <h3>{props.text}</h3>
      <div className="icons-line">
        <DeleteIcon className="line-icon" />
        <EditIcon className="line-icon" />
        <ViewIcon className="line-icon" />
      </div>
    </div>
  );
};
export default Line;
