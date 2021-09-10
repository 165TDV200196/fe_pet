import React, { useRef } from "react";
import { useState } from "react";
import "../../sass/Login/Login.scss";
import imgDog from "../../images/login.png";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import userApi from "../../api/userApi";
import { messageShowErr, messageShowSuccess } from "../../function";
import {
  eyeHidenLogin,
  userLogin,
  eyeShowLogin,
  lockLogin,
  facebook,
  twitter,
  google,
} from "../Admin/svg/IconSvg";
export default function Register() {
  const [showPass, setShowPass] = useState("password");
  const clickShowPass = () => {
    setShowPass(showPass === "password" ? "text" : "password");
  };
  const [showRePass, setShowRePass] = useState("password");
  const clickShowRePass = () => {
    setShowRePass(showRePass === "password" ? "text" : "password");
  };
  const style = {
    background: `url(${imgDog}) center no-repeat`,
    backgroundSize: "cover",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const history = useHistory();
  const onSubmit = async (data) => {
    userApi
      .postuser({
        email: data.email,
        password: data.password,
        firstName: "nguyen",
        lastName: "van",
        status: 1,
      })
      .then((ok) => {
        if (ok?.message === "Email đã tồn tại!") {
          messageShowErr("Email của bạn đã được đăng ký!");
        } else {
          messageShowSuccess("Đăng ký thành công!");
          history.push("/Login");
        }
      });
  };
  return (
    <div>
      <div className="Login" style={style}>
        <div className="blur"></div>
        <div className="box-login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="title-login">Đăng ký</div>
            <div className="form-account">
              <label htmlFor="">Email đăng nhập</label>
              <div className="input">
                <div className="icon">{userLogin}</div>
                <input
                  type="text"
                  id=""
                  {...register("email", {
                    required: "Không được để trống!",
                    pattern: {
                      value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                      message: "Không đúng định dạng email!",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
            <div className="form-password">
              <label htmlFor="">Mật khẩu</label>
              <div className="input">
                <div className="icon">{lockLogin}</div>
                <input
                  type={`${showPass}`}
                  id=""
                  className="pass"
                  {...register("password", {
                    required: "Không được để trống!",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu ít nhất 6 ký tự!",
                    },
                    maxLength: {
                      value: 20,
                      message: "Mật khẩu quá dài!",
                    },
                  })}
                />

                <div className="icon-show" onClick={clickShowPass}>
                  {showPass === "password" ? eyeHidenLogin : eyeShowLogin}
                </div>
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>
            <div className="form-password">
              <label htmlFor="">Nhập lại mật khẩu</label>
              <div className="input">
                <div className="icon">{lockLogin}</div>
                <input
                  type={`${showRePass}`}
                  {...register("rePassword", {
                    required: "Không được để trống!",
                    validate: (value) =>
                      value === password.current ||
                      "Không trùng khớp với mật khẩu!",
                  })}
                  id=""
                  className="pass"
                />
                <div className="icon-show" onClick={clickShowRePass}>
                  {showRePass === "password" ? eyeHidenLogin : eyeShowLogin}
                </div>
              </div>
              {errors.rePassword && (
                <p className="text-danger">{errors.rePassword.message}</p>
              )}
            </div>
            <div className="btn-login">
              <button style={{ color: "white" }}>Đăng ký</button>
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
            <div className="login-2">
              <Link to="/Login">Đăng nhập</Link>
              <span> nếu bạn đã có tài khoản</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
