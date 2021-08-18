import { Container, Grid } from "@material-ui/core";
import React from "react";
import Banner from "../../Banner/Banner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import img1 from "../../../images/pet4.jpg";
import img2 from "../../../images/1227.gif";
import "../../../sass/ListNews/New.scss";
import Footer from "../../Home/Footer/Footer";
import { Link } from "react-router-dom";
export default function DetailNew() {
  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Tin tức", link: "/ListNews" },
    { name: "Tên tin tức" },
  ];
  return (
    <div className="DetailNew">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <div className="new">
              <div className="new-title">
                Mẹo độc đáo không ngờ cho người tìm việc
              </div>
              <div className="new-tag">
                <div className="tag">chó ngao</div>
                <div className="tag">Mèo Donal</div>
              </div>
              <div className="new-author">
                <div className="avatar">
                  <img src={img1} alt="" />
                </div>
                <div className="name">Quỳnh chi</div>
                <div className="time"> lúc 26 Tháng Hai, 2021</div>
              </div>
              <div className="new-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                quo iure, nobis, quae assumenda laborum nulla consectetur est
                cumque ullam facere. Accusamus, debitis. Incidunt explicabo quos
                illum molestiae. Autem, rerum.
              </div>
              <div className="new-share">
                <div className="text">Chia sẻ ngay</div>
                <div className="icon-share">
                  <div className="icon" style={{ backgroundColor: "#087ceb" }}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="svg-inline--fa fa-facebook-f fa-w-10 fa-xs"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <div className="icon" style={{ backgroundColor: "#1da1f3" }}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-twitter fa-w-16 fa-sm"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <div className="icon" style={{ backgroundColor: "#ea4235" }}>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                      className="svg-inline--fa fa-google fa-w-16 fa-4x"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="other">
              <div className="other-new">
                <div className="other-new-title">Có thể bạn quan tâm</div>
                <div className="other-new-content">
                  <ul>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.Làm cho thú cưng của bạn trở nên hạnh phúc
                            hơn bao giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.Làm cho thú cưng của bạn trở nên hạnh phúc
                            hơn bao giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hr"></div>
              <div className="poster">
                <img src={img2} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
