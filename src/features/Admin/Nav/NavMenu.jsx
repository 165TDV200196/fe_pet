import React, { useEffect, useRef } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import img1 from "../../../images/pet6.jpg";
import "../../../sass/Admin/Nav.scss";
import { app, bell, logoAdmin, news } from "../svg/IconSvg";
import { clickActive } from "./NavJs";
export default function NavMenu() {
  const ulEL = useRef(null);
  const lineEL = useRef(null);
  useEffect(() => {
    clickActive(ulEL.current, lineEL.current);
  }, []);
  const { path } = useRouteMatch();
  return (
    <div className="nav-left ">
      <div className="heading-left">
        <div className="logo">{logoAdmin}</div>
      </div>
      <div className="user">
        <div className="avatar">
          <img src={img1} alt="" />
        </div>
        <div className="content">
          <div className="title">Chức vụ</div>
          <div className="position">admin</div>
        </div>
      </div>
      <div className="content">
        <div className="title">Tổng quan</div>
        <ul ref={ulEL}>
          <div className="line" ref={lineEL}></div>
          <li>
            <Link to={`${path}`} className="active">
              <div className="icon">{app}</div>
              <div className="text">Thống kê</div>
            </Link>
          </li>
          <li>
            <Link to={`${path}/New`}>
              <div className="icon">{news}</div>
              <div className="text">Tin tức</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
