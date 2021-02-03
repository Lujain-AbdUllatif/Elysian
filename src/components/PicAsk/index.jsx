import React, { useState, useEffect, Fragment } from "react";
import "./style.css";

//components imports
import AskThreeTimes from "../AskThreeTimes";
const correct = new Audio("/sounds/correct.mp3");
const incorrect = new Audio("/sounds/incorrect.mp3");
const questionCompleted = new Audio("/sounds/questioncompleted.mp3");

const PicAsk = ({ images, answers, currentPic, setCurrentPic }) => {
  //sounds

  //states
  const [askThreeTimes, setAskThreeTimes] = useState(false);
  const [picAsks, setPicAsks] = useState(0);
  const [bigPicClaass, setBigPicClass] = useState("showed");
  const [testState, setTestState] = useState(false);
  //functions
  // dragItDown() drags a picture down to the drop area (takes the pic with its)
  const dragItDown = (picDiv) => {
    const dropArea = document.querySelector(".drop2"); //drop area for all pictures
    dropArea.appendChild(picDiv);
  };

  //checkIt()
  const checkIt = (decision) => {
    const yesButton = document.querySelector("#yesBtn");
    const noButton = document.querySelector("#noBtn");
    yesButton.disabled = true;
    yesButton.classList.add("disabled-view");
    noButton.disabled = true;
    noButton.classList.add("disabled-view");

    const dragTopContainers = document.querySelectorAll(".drop1"); //img divs (second parents (top))
    const dragContainers = Array.from(document.querySelectorAll(".Drag-Img")); //img divs (first parents)
    const containerToDrag = dragContainers.filter((dragContainer) => {
      return dragContainer.id == currentPic.number;
    })[0];
    const dropArea = document.querySelector(".drop2"); //drop area for all pictures

    //happy face
    const happyFace = document.createElement("img");
    happyFace.src = "./img/smile.png";
    happyFace.classList.add("happy-face");
    //sad face
    const sadFace = document.createElement("img");
    sadFace.src = "./img/sad.png";
    sadFace.classList.add("sad-face");

    if (decision == "yes") {
      if (askThreeTimes) {
        if (answers.indexOf(String(currentPic.number)) != -1) {
          correct.play();
          setAskThreeTimes(false);
          setPicAsks(0);
          containerToDrag.appendChild(happyFace);
          containerToDrag.firstElementChild.style.visibility = "visible";
          containerToDrag.appendChild(happyFace);
          dragItDown(containerToDrag);

          //now I want to make sure if there are more pictures  inside the array(exercise pictues)
          //here I check if there is more pictures in that question or not:
          if (
            images.indexOf(
              images.find((img) => img.number == currentPic.number)
            ) <
            images.length - 1
          ) {
            setCurrentPic(
              images[
                images.indexOf(
                  images.find((img) => img.number == currentPic.number)
                ) + 1
              ]
            );
          } else {
            questionCompleted.play();
            setTestState(true);
            alert("now we should set a new question :)");
          }
        } else {
          containerToDrag.firstElementChild.style.visibility = "visible";
          setBigPicClass("hidden");

          if (picAsks != 2) {
            setTimeout(() => {
              containerToDrag.firstElementChild.style.visibility = "hidden";
              setBigPicClass("visible");
            }, 650);
          }
          setTimeout(() => {
            setBigPicClass("visible");
          }, 650);

          /////////////
          dragItDown(containerToDrag);
          setPicAsks((prev) => prev + 1);
          if (picAsks == 2) {
            if (answers.indexOf(String(currentPic.number)) != -1) {
              containerToDrag.appendChild(happyFace);
            } else {
              incorrect.play();
              containerToDrag.appendChild(sadFace);
            }
            setAskThreeTimes(false);
            setPicAsks(0);
            //checking if there are more pictures in this exercise
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
              questionCompleted.play();

              alert("now we should set a new question :)");
            }
          }
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////////////

      //if its really yes:
      else {
        if (answers.indexOf(String(currentPic.number)) != -1) {
          correct.play();
          containerToDrag.appendChild(happyFace);
          containerToDrag.firstElementChild.style.visibility = "visible";
          dragItDown(containerToDrag);
          //now I want to make sure if there are more pictures  inside the array(exercise pictues)
          //here I check if there is more pictures in that question or not:
          if (
            images.indexOf(
              images.find((img) => img.number == currentPic.number)
            ) <
            images.length - 1
          ) {
            setCurrentPic(
              images[
                images.indexOf(
                  images.find((img) => img.number == currentPic.number)
                ) + 1
              ]
            );
          } else {
            questionCompleted.play();
            setTestState(true);

            alert("now we should set a new question :)");
          }
        } else {
          containerToDrag.firstElementChild.style.visibility = "visible";
          setBigPicClass("hidden");
          setTimeout(() => {
            containerToDrag.firstElementChild.style.visibility = "hidden";
            setBigPicClass("visible");
          }, 600);
          dragItDown(containerToDrag);
          setPicAsks((prev) => prev + 1);
          setAskThreeTimes(true);
        }
      }

      /*****************************************************************************************/
    } else if (decision == "no") {
      if (askThreeTimes) {
        if (answers.indexOf(String(currentPic.number)) == -1) {
          correct.play();
          setAskThreeTimes(false);
          setPicAsks(0);
          containerToDrag.firstElementChild.style.visibility = "visible";
          containerToDrag.appendChild(happyFace);
          //checking if there are more pictures in this exercise
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
            questionCompleted.play();
            setTestState(true);
            alert("now we should set a new question :)");
          }
        }

        containerToDrag.firstElementChild.style.visibility = "visible";
        setBigPicClass("hidden");

        if (picAsks != 2) {
          if (answers.indexOf(String(currentPic.number)) != -1)
            setTimeout(() => {
              containerToDrag.firstElementChild.style.visibility = "hidden";
              setBigPicClass("visible");
            }, 650);
        }
        setTimeout(() => {
          setBigPicClass("visible");
        }, 650);

        const dragContainers = document.querySelectorAll(".drop1");
        const wantedDivIndex = images.indexOf(
          images.find((img) => img.number == currentPic.number)
        );
        dragContainers[wantedDivIndex].appendChild(containerToDrag);
        setPicAsks((prev) => prev + 1);
        if (picAsks == 2) {
          containerToDrag.firstElementChild.style.visibility = "visible";
          if (answers.indexOf(String(currentPic.number)) == -1) {
            containerToDrag.appendChild(happyFace);
          } else {
            incorrect.play();
            containerToDrag.appendChild(sadFace);
          }
          setAskThreeTimes(false);
          setPicAsks(0);
          //checking if there are more pictures in this exercise
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
            questionCompleted.play();
            setTestState(true);

            alert("now we should set a new question :)");
          }
        }
      }

      //if we are not in the asking 3 level
      else {
        //if its really no:
        if (answers.indexOf(String(currentPic.number)) == -1) {
          correct.play();
          containerToDrag.firstElementChild.style.visibility = "visible";
          const happyFace = document.createElement("img");
          happyFace.src = "./img/smile.png";
          happyFace.classList.add("happy-face");
          containerToDrag.appendChild(happyFace);
          //checking if there are more pictures in this exercise
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
            questionCompleted.play();
            setTestState(true);

            alert("now we should set a new question :)");
          }
        } else {
          containerToDrag.firstElementChild.style.visibility = "visible";
          setBigPicClass("hidden");
          setTimeout(() => {
            containerToDrag.firstElementChild.style.visibility = "hidden";
            setBigPicClass("visible");
          }, 600);

          //setting the following states in order to start asking the user (3 times)
          setPicAsks((prev) => prev + 1);
          setAskThreeTimes(true);
        }
      }
    }
    setTimeout(() => {
      yesButton.disabled = false;
      yesButton.classList.remove("disabled-view");
      noButton.disabled = false;
      noButton.classList.remove("disabled-view");
    }, 900);
  };

  //useEffect
  //I will show the image box empty (like dragged) when asking about the image
  useEffect(() => {
    const dragContainers = Array.from(document.querySelectorAll(".Drag-Img"));
    const containerToDrag = dragContainers.filter((dragContainer) => {
      return dragContainer.id == currentPic.number;
    })[0];
    containerToDrag.firstElementChild.style.visibility = "hidden";
  }, [currentPic]);

  return (
    <div className="ask-div">
      <img src={currentPic.url} className={bigPicClaass} />
      <div className="questionAndButtons">
        {askThreeTimes ? (
          <h2 className="pic-question big">"Are You Sure? Think Again"</h2>
        ) : (
          ""
        )}
        <h2 className="pic-question">Does that Fit? Check Well</h2>
        <div className="yes-no-btns">
          <button
            id="yesBtn"
            onClick={() => {
              if (!testState) checkIt("yes");
            }}
          >
            Yes
          </button>
          <button
            id="noBtn"
            onClick={() => {
              if (!testState) checkIt("no");
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default PicAsk;
