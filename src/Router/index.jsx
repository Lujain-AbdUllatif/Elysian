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
import ViewExercises from "../screens/ViewExercises";
import ViewTests from "../screens/ViewTests";

export const HomeRoute = "/";
export const QuestionRoute = "/question";
export const ViewExercisesRoute = "/View-Exercises";
export const ViewTestsRoute = "/View-Tests";
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
          <Route path={ViewExercisesRoute}>
            <ViewExercises />
          </Route>
          <Route path={ViewTestsRoute}>
            <ViewTests />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
