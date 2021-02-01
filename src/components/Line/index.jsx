import React, { useEffect, useState } from "react";
import { DeleteIcon, ViewIcon, EditIcon } from "../../icons";
import "./style.css";
import ImageSet from "../../components/ImageSet";
import Questions from "../../components/Questions";

import { ScrollIcon } from "../../icons";
import ScrollToTop from "../ScrollToTop";
import "./style.css";

const Line = (props) => {
  const [eyeClick, setEyeClick] = React.useState(false);
  const [deleteClick, setDeleteClick] = React.useState(false);
  const [editClick, setEditClick] = React.useState(false);

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
          {/* <button onClick={handleClick} className="line-btns">
            <EditIcon />
          </button> */}

          <button onClick={handleShowExe} className="line-btns">
            <ViewIcon />
          </button>
        </div>
      </div>

      {eyeClick ? (
        <div className="main-details-exercise">
          <ImageSet className="images" images={props.exerciseData.images} />
          <div className="main-questions">
            <ol style={{ height: "200px" }}>
              {<Questions questions={props.exerciseData.questions} />}
            </ol>
          </div>
          {/* <button>
            <ScrollIcon onClick={handleClick} className="scroll-icon" />
          </button> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Line;
