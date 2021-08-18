import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../features/Home";
import Menu from "../features/Home/Menu/Menu.jsx";
import DetailNew from "../features/ListNews/DetailNew/DetailNew";
import ListNews from "../features/ListNews/ListNews";
import DetailPet from "../features/Shop/DetailPet/DetailPet";
import ShopPet from "../features/Shop/ShopPet/ShopPet";
export default function Routers() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/ListNews" component={ListNews} />
          <Route exact path="/Shop" component={ShopPet} />
          <Route path="/ListNews/:id" component={DetailNew} />
          <Route path="/Shop/:id" component={DetailPet} />
        </Switch>
      </Router>
    </div>
  );
}
