import React, { useState, useContext, useEffect } from "react";
import Drag from "../../components/Drag";
import DropTarget from "../../components/DropTarget";
import QuestionDiv from "../../components/QuestionDiv";
import ExamineeHeader from "../../components/ExamineeHeader";
import "./style.css";
import Instruction from "../../components/Instructions";
import Btn from "../../components/Btn";
import Alert from "../../components/Alert";
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
  // counts the questoins per exercise
  const [questionCounter, setQuestionCounter] = useState(0);
  // count the exercises per test
  const [exerciseCounter, setExerciseCounter] = useState(0);

  const answersFunc = () => {
    // returns the images that the examinee dropeed in the answeres box
    let children = document.getElementById("drop2").children;
    let idArr = [];
    for (let i = 0; i < children.length; i++) {
      idArr.push(children[i].id);
    }
    //setAnswers([...idArr]);
    console.log("Answers!!", idArr);

    return idArr;
  };

  const checkAnswer = () => {
    // checks the images in the answer and return an array with the wrong images
    let wrongAnswers = [];
    let answersArr = answersFunc();
    console.log("answersssss", answersArr);
    answersArr.map((ans) => {
      if (question.answers.indexOf(ans) == -1) {
        return wrongAnswers.push(ans);
      }
    });
    console.log("inside check answers", wrongAnswers);
    return wrongAnswers;
  };

  const newQuestion = () => {
    // checks if the examinne have the full answer and sets the next question and print well done in the console
    let check = checkAnswer(); //wrong images
    let fullAnswer = answersFunc(); // all images that the examinee has answered
    let done = false;

    if (fullAnswer.length != 0) {
      // checks if the anwer of the examinee is the same as the right answer in DB
      done =
        JSON.stringify(fullAnswer.sort()) ===
        JSON.stringify(question.answers.sort());
    }
    // set nextQuestion to "True"  if the examinee has no wrong images and picked all correct images
    if (check.length == 0 && done) {
      setNextQuestion(true);
      console.log("WELL DONE :)");
    }
    // skip for the next question if the examinee waste all the chances or answerd the true answer
    if (nextQuestion || stepsCounter == 4) {
      setQuestionCounter((counter) => counter + 1);
      setNextQuestion(false);
      setStepsCounter(0);
      setQuestion(exercise.questions[questionCounter]);
    }
  };

  const newExercise = () => {
    if (questionCounter == exercise.questions.length) {
      //nextExercise
      setExercise(test.exercises[exerciseCounter]);
      setExerciseCounter((counter) => counter + 1);
    }
  };

  const redBorder = () => {
    // mark the pics that are wrong and lay in "drop2"
    let wrong = checkAnswer();
    wrong.map((answer) => {
      document.getElementById(`${answer}`).style.border = "1rem solid red";
    });
  };
  const firstStep = () => {
    // if stepCounter = 1, we should show the alert message
  };

  const secondStep = () => {
    // if stepCounter = 2, we should show the key word
    //Done !! you can see it in  QuestionDiv component!!
  };

  const thirdStep = () => {
    // show each pic separately !
  };

  useEffect(() => {
    //setImages();
    //setQuestion();
    //setTest();
    //setExercise();
    // answersFunc();
  }, []);

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
      {stepsCounter == 1 ? <Alert /> : ""}
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
          answersFunc();
          checkAnswer();
          setStepsCounter((counter) => counter + 1);
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
