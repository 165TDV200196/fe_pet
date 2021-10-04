import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import userApi from "../api/userApi";
import Nav from "../features/Admin/Nav/Nav";
import Home from "../features/Home";
import Footer from "../features/Home/Footer/Footer";
import Menu from "../features/Home/Menu/Menu.jsx";
import InforUser from "../features/InforUser/InforUser";
import DetailNew from "../features/ListNews/DetailNew/DetailNew";
import ListNews from "../features/ListNews/ListNews";
import Login from "../features/Login/Login";
import Register from "../features/Register/Register";
import DetailPet from "../features/Shop/DetailPet/DetailPet";
import ShopPet from "../features/Shop/ShopPet/ShopPet";
const Routers = (props) => {
  const { location } = props;
  const pathName = location.pathname;
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(false);
  
  useEffect(async() => {
    await userApi.checkUser().then((ok) => {
      setUser(ok);
    });
  }, [load]);
  const checkLoad = () => {
    setLoad(!load);
  };
  const hangdleLogout = (e) => {
    setUser(e);
  };
  return (
    <div>
      {pathName === "/login" ||
      pathName === "/Register" ||
      pathName.includes("Admin") ? (
        ""
      ) : (
        <Menu user={user} setUserMenu={hangdleLogout} loadUser={checkLoad} />
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ListNews" component={ListNews} />
        <Route exact path="/Shop" component={ShopPet} />
        <Route path="/ListNews/:id" component={DetailNew} />
        <Route path="/Shop/:type/:id" component={DetailPet} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route
          path="/InforUser/:id"
          render={() => {
            return user ? <InforUser /> : <Login />;
          }}
        />
        <Route
          path="/Admin"
          render={() => {
            return user ? <Nav /> : <Login />;
          }}
        />
      </Switch>
      {pathName === "/login" ||
      pathName === "/Register" ||
      pathName.includes("Admin") ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};
export default withRouter(Routers);
