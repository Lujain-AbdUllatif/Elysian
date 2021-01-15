import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "../screens/Home";
import Question from "../screens/Question";
import ExamineeAnswers from "../screens/ExamineeAnswers";
import Examinees from "../screens/Examinees";

export const HomeRoute = "/";
export const QuestionRoute = "/question";
export const ExamineeAnswerRoute = "/answers";
export const ExamineesRoute = "/examinees";

export default function Routing(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={HomeRoute}>
            <Home />
          </Route>
          <Route path={QuestionRoute}>
            <Question />
          </Route>
          <Route path={ExamineeAnswerRoute}>
            <ExamineeAnswers />
          </Route>
          <Route path={ExamineesRoute}>
            <Examinees />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
