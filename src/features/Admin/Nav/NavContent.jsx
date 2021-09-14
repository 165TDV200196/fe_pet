import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddGallery from "../Gallery/AddGallery";
import Gallery from "../Gallery/Gallery";
import AddNew from "../New/AddNew";
import New from "../New/New";
import AddService from "../Service/AddService";
import Service from "../Service/Service";
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
        <Route exact path={`${path}/Service`} component={Service} />
        <Route
          exact
          path={`${path}/Service/AddService`}
          component={AddService}
        />
        <Route
          exact
          path={`${path}/Service/AddService/:id`}
          component={AddService}
        />
        <Route exact path={`${path}/Gallery`} component={Gallery} />
        <Route
          exact
          path={`${path}/Gallery/AddGallery`}
          component={AddGallery}
        />
        <Route
          exact
          path={`${path}/Gallery/AddGallery/:id`}
          component={AddGallery}
        />
      </Switch>
    </div>
  );
}
