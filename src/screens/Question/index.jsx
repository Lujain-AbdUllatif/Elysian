import React, { useState, useContext, useEffect } from "react";
import Drag from "../../components/Drag";
import DropTarget from "../../components/DropTarget";
import QuestionDiv from "../../components/QuestionDiv";
import ExamineeHeader from "../../components/ExamineeHeader";
import "./style.css";
import Instruction from "../../components/Instructions";
import Btn from "../../components/Btn";
import Alert from "../../components/Alert";
import PicAsk from "../../components/PicAsk";
const Question = (props) => {
  const [test, setTest] = useState("");
  const [exercise, setExercise] = useState("");
  const [question, setQuestion] = useState({
    question: "Which Picture has a Bird ?",
    keyword: "Bird",
    answers: ["1", "3"],
  });

  const [images, setImages] = useState([
    {
      number: 1,
      url:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      number: 2,
      url:
        "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    },
    {
      number: 3,
      url:
        "https://wereallaboutpets.com/wp-content/uploads/2019/12/lovebird-male-names.jpg",
    },
    {
      number: 4,
      url:
        "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
    },
  ]);
  // set the answers in the answers box using answerFunc in line 50
  const [answers, setAnswers] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(false);
  // counts the steps per question
  const [stepsCounter, setStepsCounter] = useState(0);
  //counts the number of asks for a picture (we ask 3 times for each pic)
  const [picAsks, setPicAsks] = useState(0);
  // counts the questoins per exercise
  const [currentPic, setCurrentPic] = useState(images[0]);
  //currentPic is the picture that we are asking about right now
  const [questionCounter, setQuestionCounter] = useState(0);
  // count the exercises per test
  const [exerciseCounter, setExerciseCounter] = useState(0);

  //functions
  //answersFunc(), returns an array of all the answers
  const answersFunc = () => {
    // returns the images that the examinee dropeed in the answeres box
    let children = document.getElementById("drop2").children;
    let idArr = [];
    for (let i = 0; i < children.length; i++) {
      idArr.push(children[i].id);
    }
    //setAnswers([...idArr]);

    return idArr;
  };

  //checkAnswer, returns an array of all wrong answers
  const checkAnswer = () => {
    // checks the images in the answer and return an array with the wrong images
    let wrongAnswers = [];
    let answersArr = answersFunc();
    answersArr.map((ans) => {
      if (question.answers.indexOf(ans) == -1) {
        return wrongAnswers.push(ans);
      }
    });
    return wrongAnswers;
  };

  //newQuestion
  const newQuestion = () => {
    /*this should be the first check here, because there is no need to make any implementation if we should move to the next question, the block below skips for the next question if the examinee waste all the chances or answerd the true answer*/
    if (nextQuestion || stepsCounter == 100) {
      // steCounter==100 just for testing :) :) :) :)
      setQuestionCounter((counter) => counter + 1);
      setNextQuestion(false); //because we are starting new question
      setStepsCounter(0);
      // setQuestion(exercise.questions[questionCounter]); // new question is here :)
    }

    // checks if the examinne have the full answer and sets the next question and print well done in the console
    let check = checkAnswer(); //wrong answers
    let fullAnswer = answersFunc(); // all answers
    let done = false;

    if (fullAnswer.length != 0) {
      // checks if the answer of the examinee is the same as the right answer in DB
      done =
        JSON.stringify(fullAnswer.sort()) ===
        JSON.stringify(question.answers.sort());
    }
    // set nextQuestion to "True"  if the examinee has no wrong images and picked all correct images
    if (done) {
      setNextQuestion(true);
      alert("WELL DONE :)");
    } else {
      setStepsCounter((prev) => prev + 1);
    }
  };

  //newExercise()
  const newExercise = () => {
    if (questionCounter == exercise.questions.length) {
      //nextExercise
      setExercise(test.exercises[exerciseCounter]);
      setExerciseCounter((counter) => counter + 1);
    }
  };

  //redBorder
  const redBorder = () => {
    // mark the pics that are wrong and lay in "drop2"
    let wrong = checkAnswer();
    wrong.map((answer) => {
      document.getElementById(`${answer}`).style.border = "1rem solid red";
    });
  };

  //thirdStep
  const thirdStep = () => {
    // show each pic separately !
  };

  //dragPicsBack()
  const dragPicsBack = () => {
    const dragContainers = document.querySelectorAll(".drop1");
    const dropArea = document.querySelector(".drop2");
    const draggedImages = Array.from(dropArea.children);
    draggedImages.forEach((imgDiv, i) => {
      imgDiv.style.border = "none";
      const picNumber = imgDiv.id;
      const wantedDivIndex = images.indexOf(
        images.find((img) => img.number == picNumber)
      );
      dragContainers[wantedDivIndex].appendChild(imgDiv);
    });
    // const dragPlaces = document.querySelectorAll(".drop1");
    // dragImgDivs.forEach((div, i) => {
    //   div.innerHTML = "";
    //   const div=document.createElement("div");
    //   div.className="Drag-Img";
    //   div.id=images[i].number;
    //   const img = document.createElement("img");
    //   img.style.width = "6rem";
    //   img.style.height = "6rem";
    //   img.style.margin = "auto";
    //   img.src = images[i].url;
    //   div.appendChild(img);
    // });
    // const dropArea = document.querySelector("#drop2");
    // //removing each child from the drop area
    // while (dropArea.firstElementChild) {
    //   dropArea.removeChild(dropArea.firstElementChild);
    // }
  };

  useEffect(() => {
    //setImages();
    //setQuestion();
    //setTest();
    //setExercise();
    // answersFunc();
  }, []);

  useEffect(() => {
    if (stepsCounter >= 3) {
      dragPicsBack();
    }
  }, [stepsCounter]);

  return (
    <div>
      <ExamineeHeader />
      <Instruction />
      <div className="dragImgages-div">
        {images.map((item, index) => {
          return (
            <DropTarget key={index} className="drop1">
              <Drag key={index} id={item.number}>
                <img
                  style={{ width: "6rem", height: "6rem", margin: "auto" }}
                  src={item.url}
                />
              </Drag>
            </DropTarget>
          );
        })}
      </div>
      {stepsCounter == 1 ? (
        <Alert />
      ) : stepsCounter >= 3 ? (
        <PicAsk
          images={images}
          answers={question.answers}
          currentPic={currentPic}
          setCurrentPic={setCurrentPic}
          picAsks={picAsks}
          setPicAsks={setPicAsks}
        />
      ) : (
        ""
      )}
      <QuestionDiv
        question={question.question}
        stepsCounter={stepsCounter}
        keyword={question.keyword}
      />
      <DropTarget className="drop2" id="drop2"></DropTarget>
      <div></div>
      <button
        className="question-button"
        onClick={() => {
          // answersFunc();
          // checkAnswer();
          // setStepsCounter((counter) => counter + 1);
          newQuestion();
          redBorder();
          //newExercise();
        }}
      >
        NEXT
      </button>
    </div>
  );
};
export default Question;
