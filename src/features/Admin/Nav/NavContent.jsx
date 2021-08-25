import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import New from "../New/New";
import Statistical from "../Statistical/Statistical";

export default function NavContent() {
  const { path } = useRouteMatch();
  return (
    <div className="NavContent">
      <Switch>
        <Route exact path={`${path}`} component={Statistical} />
        <Route exact path={`${path}/New`} component={New} />
      </Switch>
    </div>
  );
}
