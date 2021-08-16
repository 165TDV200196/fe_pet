import React from "react";
import "../../../sass/Home/Slide.scss";
import imgCat from "../../../images/cat1.jpg";
import imgDog from "../../../images/dog1.jpg";
import imgVoi from "../../../images/voi1.jpg";
import "./slide";
export default function Slide() {
  return (
    <div className="Slide">
      <div className="slideWrapper">
        <div className="slides">
          <div className="blur"></div>
          <div
            className="slide-item slide-active"
            style={{ color: "#978e79 " }}
          >
            <img src={imgCat} alt="" />
            <div className="slide-content">
              <h1>01</h1>
              <h3>Mèo ZumBa</h3>
              <div className="hr"></div>
              <span>
                Cung cấp các dịch vụ chăm sóc đặc biệt cho thú cưng của bạn
              </span>
              <br />
              <button>Xem ngay</button>
            </div>
          </div>
          <div className="slide-item " style={{ color: "#724c3d " }}>
            <img src={imgDog} alt="" />
            <div className="slide-content">
              <h1>02</h1>
              <h3>Chó ShiBa</h3>
              <div className="hr"></div>
              <span>
                Cung cấp các dịch vụ chăm sóc đặc biệt cho thú cưng của bạn
              </span>
              <br />
              <button>Xem ngay</button>
            </div>
          </div>
          <div className="slide-item " style={{ color: "#4c433c " }}>
            <img src={imgVoi} alt="" />
            <div className="slide-content">
              <h1>03</h1>
              <h3>Voi TiKa</h3>
              <div className="hr"></div>
              <span>
                Cung cấp các dịch vụ chăm sóc đặc biệt cho thú cưng của bạn
              </span>
              <br />
              <button>Xem ngay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
