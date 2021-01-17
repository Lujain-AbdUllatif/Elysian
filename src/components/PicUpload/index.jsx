import React, { useEffect, useState } from "react";
import "./style.css";
//icons imports
import { PlusIcon, PicIcon } from "../../icons/index";

const PicUpload = ({ picNum }) => {
  //states
  const [testVal, setTestval] = useState("");
  console.log("VAAAAL IS: ", testVal);
  return (
    <div className="pic-uploader-container">
      <PicIcon className="pic-icon" />
      <PlusIcon className="plus-icon" />
      <span className="pic-num">{picNum}</span>
      <label htmlFor="pic-upload">
        <input
          type="file"
          id="pic-upload"
          onChange={(e) => setTestval(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PicUpload;
