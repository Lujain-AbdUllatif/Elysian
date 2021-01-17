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
import MakeExercise from "../screens/MakeExercise/index";
import ExamineeAnswers from "../screens/ExamineeAnswers";
import Examinees from "../screens/Examinees";
import ViewExercises from "../screens/ViewExercises";
import ViewTests from "../screens/ViewTests";

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
          <Route path="/answers">
            <ExamineeAnswers />
          </Route>
          <Route path="/examinees">
            <Examinees />
          </Route>
          <Route path="/makeexercise">
            <MakeExercise />
          </Route>
          <Route path="/View-Exercises">
            <ViewExercises />
          </Route>
          <Route path="/View-Tests">
            <ViewTests />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
