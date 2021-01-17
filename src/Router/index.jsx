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
//routes
export const HomeRoute = "/";
export const QuestionRoute = "/question";
export const makeExerciseRoute = "/makeexercise";

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
          <Route path={makeExerciseRoute}>
            <MakeExercise />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
