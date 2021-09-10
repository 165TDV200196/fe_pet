import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddNew from "../New/AddNew";
import New from "../New/New";
import Statistical from "../Statistical/Statistical";
import AddTag from "../Tag/AddTag";
import Tag from "../Tag/Tag";

export default function NavContent() {
  const { path } = useRouteMatch();
  return (
    <div className="NavContent">
      <Switch>
        <Route exact path={`${path}`} component={Statistical} />
        <Route exact path={`${path}/New`} component={New} />
        <Route exact path={`${path}/New/AddNew`} component={AddNew} />
        <Route exact path={`${path}/New/AddNew/:id`} component={AddNew} />
        <Route exact path={`${path}/Tag`} component={Tag} />
        <Route exact path={`${path}/Tag/AddTag`} component={AddTag} />
        <Route exact path={`${path}/Tag/AddTag/:id`} component={AddTag} />
      </Switch>
    </div>
  );
}
