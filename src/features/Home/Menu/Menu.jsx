import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../../api/userApi";
import "../../../sass/Home/Menu.scss";
import { iconLogin, iconLogout, userHome } from "../../Admin/svg/IconSvg";
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
  console.log(load, user);
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
        <div className="icon-bar">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-bars fa-w-14 fa-3x"
          >
            <path
              fill="currentColor"
              d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
              className=""
            ></path>
          </svg>
        </div>
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
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-search fa-w-16 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                  className=""
                ></path>
              </svg>
            </div>
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
                  <Link>
                    <div className="icon">{userHome}</div>
                    <div className="text">Thông tin </div>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      localStorage.removeItem("tokenPet");
                      setLoad(!load);
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
