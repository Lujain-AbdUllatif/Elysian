import React, { useState, useContext, useEffect } from "react";
import Drag from "../../components/Drag";
import DropTarget from "../../components/DropTarget";
import QuestionDiv from "../../components/QuestionDiv";
import "./style.css";

const Question = (props) => {
  const [question, setQuestion] = useState("Which Picture has a Bird?");
  const [questionImages, setQuestionImages] = useState([
    "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
  ]);

  useEffect(() => {
    //setQuestionImages();
    //setQuestion();
    console.log("children", document.getElementById("drop1").children);
  }, []);

  return (
    <div>
      <DropTarget id="drop1">
        {questionImages.map((item, index) => {
          return (
            <Drag key={index} id={index}>
              <img
                style={{ width: "6rem", height: "6rem", margin: "10px" }}
                src={item}
              />
            </Drag>
          );
        })}
      </DropTarget>
      <QuestionDiv question={question} />
      <DropTarget id="drop2"></DropTarget>
    </div>
  );
};
export default Question;
