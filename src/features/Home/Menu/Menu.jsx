import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../../api/userApi";
import "../../../sass/Home/Menu.scss";
import {
  bar,
  iconLogin,
  iconLogout,
  search,
  userHome,
} from "../../Admin/svg/IconSvg";
import { menuJs } from "./menu";

export default function Menu() {
  const [openSelect, setOpenSelect] = useState("hident");
  const [initSelect, setinitSelect] = useState("none");
  const [load, setLoad] = useState(true);
  const [user, setUser] = useState(null);
  const MenuEl = useRef(null);
  const MenuHidentEl = useRef(null);
  const MenuBarEl = useRef(null);
  const ClickAvatar = () => {
    setinitSelect("flex");
    setOpenSelect(openSelect === "hident" ? "" : "hident");
  };
  const selectEL = useRef("null");
  useEffect(() => {
    userApi.checkUser().then((ok) => {
      setUser(ok);
    });
    menuJs(MenuEl.current, MenuHidentEl.current, MenuBarEl.current);
  }, [load]);
  const avatarDefault =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWalCQZajCWwnxKEE86RcbGh2i1XxEQ9Jkxt6ijNjm1CrvdnYilpInfHHVeriUng58IBo&usqp=CAU";
  return (
    <div className="Menu" ref={MenuEl}>
      <div className="menu-logo">
        <div className="logo">
          <Link to="/">my pet</Link>
        </div>
      </div>
      <div className="menu-bar" ref={MenuBarEl}>
        <div className="icon-bar">{bar}</div>
      </div>
      <div id="menu-hide" ref={MenuHidentEl} style={{ display: "flex" }}>
        <div className="menu-item">
          <div className="list-item">
            <ul>
              <li className="item">
                <Link>Trang chủ</Link>
              </li>
              <li className="item">
                <Link to="/Shop">Cửa hàng</Link>
              </li>
              <li className="item">
                <Link>Giới thiệu</Link>
              </li>
              <li className="item">
                <Link to="/ListNews">Tin tức</Link>
              </li>
              <li className="item">
                <Link to="/Admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-account">
          <div className="search">
            <input type="text" name="" placeholder="Tìm kiếm" id="" />
            <div className="icon">{search}</div>
          </div>
          <div className="avatar" onClick={ClickAvatar}>
            <img src={user ? user.avatar : avatarDefault} alt="" />
          </div>
          <div
            className={`select ${openSelect}`}
            style={{ display: `${initSelect}` }}
            ref={selectEL}
          >
            {user ? (
              <ul>
                <li>
                  <Link to={`/InforUser/${user.id}`}>
                    <div className="icon">{userHome}</div>
                    <div className="text">Thông tin </div>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      localStorage.removeItem("tokenPet");
                      setUser(null);
                    }}
                  >
                    <div className="icon">{iconLogout}</div>
                    <div className="text">Đăng xuất</div>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/login">
                    <div className="icon">{iconLogin}</div>
                    <div className="text">Đăng nhập</div>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
