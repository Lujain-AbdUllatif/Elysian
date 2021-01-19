import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//screens imports
import Home from "../screens/Home";
import Question from "../screens/Question";
import MakeExercise from "../screens/MakeExercise";
import ExamineeAnswers from "../screens/ExamineeAnswers";
import Examinees from "../screens/Examinees";
import ViewExercises from "../screens/ViewExercises";
import ViewTests from "../screens/ViewTests";
import TesterHome from "../screens/TesterHome";
import MakeTest from "../screens/MakeTest";

export default function Routing(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
          <Route path="/examinees-answers">
            <ExamineeAnswers />
          </Route>
          <Route path="/examinees">
            <Examinees />
          </Route>
          <Route path="/make-exercise">
            <MakeExercise />
          </Route>
          <Route path="/view-exercises">
            <ViewExercises />
          </Route>
          <Route path="/view-tests">
            <ViewTests />
          </Route>
          <Route path="/tester-home">
            <TesterHome />
          </Route>
          <Route path="/make-test">
            <MakeTest />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
