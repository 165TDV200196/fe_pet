import React, { useEffect, useRef } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import img1 from "../../../images/pet6.jpg";
import "../../../sass/Admin/Nav.scss";
import { app, bell, logoAdmin, news } from "../svg/IconSvg";
import { clickActive } from "./NavJs";
export default function NavMenu() {
  const ulEL = useRef(null);
  const lineEL = useRef(null);

  useEffect(() => {
    const listLi = ulEL.current.querySelectorAll("li a");
    const listActive = ulEL.current.querySelector("li>a.active");
    let idClass = pathname.slice(7);
    listActive.classList.remove("active");
    let liIndex = 0;
    for (let i = 0; i < listLi.length; i++) {
      const element = listLi[i];
      if (element.id === idClass) {
        liIndex = i;
        element.classList.add("active");
      }
    }
    clickActive(ulEL.current, lineEL.current, liIndex);
  }, []);
  const { path } = useRouteMatch();
  const { pathname } = useLocation();
  return (
    <div className="nav-left ">
      <div className="heading-left">
        <div className="logo">
          <Link to="/">{logoAdmin}</Link>
        </div>
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
            <Link to={`${path}`} className="active" id="">
              <div className="icon">{app}</div>
              <div className="text">Thống kê</div>
            </Link>
          </li>
          <li>
            <Link to={`${path}/New`} id="New">
              <div className="icon">{news}</div>
              <div className="text">Tin tức</div>
            </Link>
          </li>
          <li>
            <Link to={`${path}/Tag`} id="Tag">
              <div className="icon">{news}</div>
              <div className="text">Tag</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
