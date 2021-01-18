import React from "react";
import "./style.css";

const Images = (props) => {
  return (
    <div className="images-viewExercises">
      <img src={props.src} />
    </div>
  );
};
export default Images;
