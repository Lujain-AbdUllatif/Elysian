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

export const HomeRoute = "/";
export const QuestionRoute = "/question";

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
        </Switch>
      </Router>
    </div>
  );
}
