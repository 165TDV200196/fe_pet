import React from "react";
import { Link } from "react-router-dom";
import imgDog from "../../../images/cat3.jpg";
import "../../../sass/Home/Services.scss";
export default function Services() {
  const style = {
    background: `url(${imgDog}) center no-repeat`,
    backgroundSize: "cover",
  };
  return (
    <div className="Services" style={style}>
      <div className="blur"></div>
      <div className="heading">
        <div className="heading__title text-white">
          <h3>Dịch vụ của chúng tôi</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <div className="container">
        <div className="post-grid">
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="cut"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-cut fa-w-14 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M249.52 256L446.83 58.83a3.996 3.996 0 0 0 0-5.65c-12.5-12.5-32.76-12.5-45.25 0L224.06 230.56l-48.64-48.61C185.88 166.57 192 148 192 128c0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c20.01 0 38.58-6.12 53.96-16.6l48.63 48.6-48.63 48.6C134.58 294.12 116.01 288 96 288c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-20-6.12-38.57-16.58-53.95l48.64-48.61 177.52 177.38c12.5 12.5 32.76 12.5 45.25 0a3.996 3.996 0 0 0 0-5.65L249.52 256zM96 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0 256c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Tỉa lông</div>
            <div className="description">
              Cắt tỉa lông cho thú cưng theo phong cách thời trang giới thượng
              lưu
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="paw"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-paw fa-w-16 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Cắt móng</div>
            <div className="description">
              Cắt gọn và mài để móng vuốt của các bé không vô tình làm đau bạn
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="heartbeat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-heartbeat fa-w-16 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Chắm sóc sức khoẻ</div>
            <div className="description">
              Thăm khám sức khoẻ cho thú cưng của bạn với các chuyên qia hàng
              đầu trong lĩnh vực
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="tooth"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-tooth fa-w-14 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Chải và đánh răng</div>
            <div className="description">
              Làm sạch khoang miệng thú cưng của bạn để chúng một hơi thở thơm
              tho hơn
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="ear"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="svg-inline--fa fa-ear fa-w-12 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M192 0C85.96 0 0 85.96 0 192v176c0 79.53 64.47 144 144 144s144-64.47 144-144v-9.9c57.33-33.21 96-95.08 96-166.1C384 85.96 298.04 0 192 0zm128 200c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-8c0-52.94-43.06-96-96-96s-96 43.06-96 96c0 17.64 14.36 32 32 32h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-8c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h8c17.64 0 32-14.36 32-32s-14.36-32-32-32h-32c-35.3 0-64-28.7-64-64 0-70.58 57.42-128 128-128s128 57.42 128 128v8z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Làm sạch tai</div>
            <div className="description">
              Dùng các máy móc hiện đại để làm sạch tai tránh các sinh vật khác
              làm ổ bên trong
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
          <div className="post-item">
            <div className="icon">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="medkit"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-medkit fa-w-16 fa-3x"
              >
                <path
                  fill="currentColor"
                  d="M96 480h320V128h-32V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H96v352zm96-384h128v32H192V96zm320 80v256c0 26.51-21.49 48-48 48h-16V128h16c26.51 0 48 21.49 48 48zM64 480H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v352zm288-208v32c0 8.837-7.163 16-16 16h-48v48c0 8.837-7.163 16-16 16h-32c-8.837 0-16-7.163-16-16v-48h-48c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h48v-48c0-8.837 7.163-16 16-16h32c8.837 0 16 7.163 16 16v48h48c8.837 0 16 7.163 16 16z"
                  className=""
                ></path>
              </svg>
            </div>
            <div className="title">Thăm khám định kỳ</div>
            <div className="description">
              Thú cưng được chăm sóc định kỳ hàng tháng khi đăng ký gói khám
              định kỳ của công ty
            </div>
            <div className="btn">
              <Link>Đăng ký ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
