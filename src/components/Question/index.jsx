import React, { useState, useEffect, useRef } from "react";
import "./style.css";

//icons imports
import { ArrowIcon } from "../../icons/index";
const Question = ({ images, pics, setQArr, id }) => {
  //states
  const [clicked, setClicked] = useState(true);

  const handleOnChange = (e, field, questionKey) => {
    // setValues({ ...values, [inputName]: event.target.value });
    setQArr((prev) => {
      return {
        ...prev,
        [questionKey]: {
          ...prev[questionKey],
          [field]: e.target.value,
        },
      };
    });
  };

  const checkboxChangeHandler = (e, field, questionKey, checked) => {
    setQArr((prev) => {
      return {
        ...prev,
        [questionKey]: prev[questionKey]
          ? {
              ...prev[questionKey],
              [field]:
                prev[questionKey][field] && checked
                  ? [...prev[questionKey][field], e.target.value]
                  : !checked
                  ? prev[questionKey][field].filter(
                      (elem) => elem != e.target.value
                    )
                  : [e.target.value],
            }
          : {
              answers: [e.target.value],
            },
      };
    });
  };

  return (
    <div className="Question">
      <div className="container" id={id}>
        <input
          type="text"
          placeholder="Question"
          className="question"
          required
          onChange={(e) => {
            handleOnChange(e, "question", e.target.parentElement.id);
          }}
        />

        <input
          type="text"
          placeholder="Keyword"
          className="keyword"
          required
          onChange={(e) => {
            handleOnChange(e, "keyword", e.target.parentElement.id);
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
          {Array.from(images).map((image, i) => {
            return (
              <li key={i} className={clicked ? "hide" : ""}>
                <input
                  type="checkbox"
                  value={image.number}
                  onChange={(e) => {
                    checkboxChangeHandler(
                      e,
                      "answers",
                      e.target.parentElement.parentElement.parentElement.id,
                      e.target.checked
                    );
                  }}
                />
                <label>{image.number}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Question;
