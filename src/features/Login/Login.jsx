import React from "react";
import { useState } from "react";
import "../../sass/Login/Login.scss";
import imgDog from "../../images/login.png";
import { Link } from "react-router-dom";
import {
  eyeHidenLogin,
  eyeShowLogin,
  facebook,
  google,
  lockLogin,
  twitter,
  userLogin,
} from "../Admin/svg/IconSvg";
export default function Login() {
  const [showPass, setShowPass] = useState("password");
  const clickShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };
  const style = {
    background: `url(${imgDog}) center no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <div className="Login" style={style}>
      <div className="blur"></div>
      <div className="box-login">
        <div className="title-login">Đăng nhập</div>
        <div className="form-account">
          <label htmlFor="">Tài khoản</label>
          <div className="input">
            <div className="icon">{userLogin}</div>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="form-password">
          <label htmlFor="">Mật khẩu</label>
          <div className="input">
            <div className="icon">{lockLogin}</div>
            <input type={`${showPass}`} name="" id="" className="pass" />
            <div className="icon-show" onClick={clickShowPass}>
              {showPass === "password" ? eyeHidenLogin : eyeShowLogin}
            </div>
          </div>
        </div>
        <div className="forgot">
          <span>Quên mật khẩu?</span>
        </div>
        <div className="btn-login">
          <button>
            <Link to="/">Đăng nhập</Link>
          </button>
        </div>
        <div className="login-other">
          <div className="text">Hoặc đăng nhập với</div>
          <div className="icon-login">
            <div className="icon" style={{ backgroundColor: "#087ceb" }}>
              {facebook}
            </div>
            <div className="icon" style={{ backgroundColor: "#1da1f3" }}>
              {twitter}
            </div>
            <div className="icon" style={{ backgroundColor: "#ea4235" }}>
              {google}
            </div>
          </div>
        </div>
        <div className="register">
          <Link to="/Register">Đăng ký</Link>
          <span> nếu bạn chưa có tài khoản</span>
        </div>
      </div>
    </div>
  );
}
