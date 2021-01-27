import React, { useState, useEffect, useRef } from "react";
import "./style.css";

//icons imports
import { ArrowIcon } from "../../icons/index";
const Question = ({ pics, setValues, values }) => {
  //states
  const [clicked, setClicked] = useState(true);

  const handleOnChange = (event, inputName) => {
    setValues({ ...values, [inputName]: event.target.value });
  };

  return (
    <div className="Question">
      <div className="container">
        <input
          type="text"
          placeholder="Question"
          className="question"
          onChange={(event) => {
            handleOnChange(event, "question");
          }}
        />

        <input
          type="text"
          placeholder="Keyword"
          className="keyword"
          onChange={(event) => {
            handleOnChange(event, "keyword");
          }}
        />
        <span className="list-key">
          Answers
          <div className="arrow-container">
            <ArrowIcon
              className="arrow"
              onClick={() => setClicked((prev) => !prev)}
            />
          </div>
        </span>
        <ul className="answers-list">
          {Array.from(pics).map((pic, i) => {
            return (
              <li key={i} className={clicked ? "hide" : ""}>
                <input type="checkbox" id={i} />
                <label htmlFor={i}>{i + 1}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Question;
