import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../features/Home";
export default function Routers() {
  return (
    <div>
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
