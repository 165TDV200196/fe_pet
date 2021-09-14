import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Nav from "../features/Admin/Nav/Nav";
import Home from "../features/Home";
import Menu from "../features/Home/Menu/Menu.jsx";
import DetailNew from "../features/ListNews/DetailNew/DetailNew";
import ListNews from "../features/ListNews/ListNews";
import Login from "../features/Login/Login";
import Register from "../features/Register/Register";
import DetailPet from "../features/Shop/DetailPet/DetailPet";
import ShopPet from "../features/Shop/ShopPet/ShopPet";
const Routers = (props) => {
  const { location, match } = props;
  const pathName = location.pathname;
  return (
    <div>
      {/* <Switch>
          <Route path="/Login" component={Menu} />
          <Route path="/Admin" component={Menu} />
          <Route path="/Register" component={Menu} />
          <Route component={Menu} />
        </Switch> */}
      {pathName === "/login" || pathName.includes("Admin") ? "" : <Menu />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ListNews" component={ListNews} />
        <Route exact path="/Shop" component={ShopPet} />
        <Route path="/ListNews/:id" component={DetailNew} />
        <Route path="/Shop/:id" component={DetailPet} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Admin" component={Nav} />
      </Switch>
    </div>
  );
};
export default withRouter(Routers);
