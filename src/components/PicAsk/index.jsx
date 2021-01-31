import React from "react";
import "./style.css";

const PicAsk = ({
  images,
  answers,
  currentPic,
  setCurrentPic,
  picAsks,
  setPicAsks,
}) => {
  //states

  //functions
  const checkIt = (decision) => {
    const dragContainers = Array.from(document.querySelectorAll(".Drag-Img"));
    const containerToDrag = dragContainers.filter((dragContainer) => {
      return dragContainer.id == currentPic.number;
    })[0];
    const dropArea = document.querySelector(".drop2");

    if (decision == "yes") {
      console.log(currentPic.number);
      console.log(answers.indexOf(String(currentPic.number)));
      //if its really yes:
      if (answers.indexOf(String(currentPic.number)) != -1) {
        dropArea.appendChild(containerToDrag);
        //now I want to make sure if there are more pictures  inside the array(exercise pictues)
        if (
          images.indexOf(
            images.find((img) => img.number == currentPic.number)
          ) <
          images.length - 1
        )
          setCurrentPic(
            images[
              images.indexOf(
                images.find((img) => img.number == currentPic.number)
              ) + 1
            ]
          );
        else {
          alert("now we should set new question, LOGIC WORKSSSSSSSS");
        }
      } else {
        alert("we need to ask the user 3 more times instead of the alert");
      }
    } else if (decision == "no") {
      //if its really no:
      if (answers.indexOf(String(currentPic.number)) == -1) {
        if (
          images.indexOf(
            images.find((img) => img.number == currentPic.number)
          ) <
          images.length - 1
        )
          setCurrentPic(
            images[
              images.indexOf(
                images.find((img) => img.number == currentPic.number)
              ) + 1
            ]
          );
        else {
          alert("now we should set new question, LOGIC WORKSSSSSSSS");
        }
      } else {
        alert("we need to ask the user 3 more times instead of the alert");
      }
    }
  };

  return (
    <div className="ask-div">
      <img src={currentPic.url} />
      <div>
        <h2 className="pic-question">Does that Fit? Check Well</h2>
        <div className="yes-no-btns">
          <button onClick={() => checkIt("yes")}>Yes</button>
          <button onClick={() => checkIt("no")}>No</button>
        </div>
      </div>
    </div>
  );
};
export default PicAsk;
