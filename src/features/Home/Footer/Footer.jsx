import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import contactApi from "../../../api/contactApi";
import socialNetworkApi from "../../../api/socialNetworkApi";
import "../../../sass/Home/Footer.scss";
export default function Footer() {
  const [contact, setContact] = useState(null);
  const [socialNetwork, setSocialNetwork] = useState(null);
  useEffect(() => {
    contactApi.getAll({ status: 1 }).then((ok) => {
      setContact(ok.data.rows);
    });
    socialNetworkApi.getAll({ status: 1 }).then((ok) => {
      setSocialNetwork(ok.data.rows);
    });
  }, []);
  return (
    <div className="Footer">
      <Container>
        <Grid container className="footer-content">
          <Grid item lg={3} md={6} sm={12} className="footer-item">
            <div className="item-title">Giới thiệu</div>
            <div className="hr"></div>
            <div className="item-content about">
              {!contact ? "" : contact[0]?.description}
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} className="footer-item">
            <div className="item-title">Liên lạc với chúng tôi</div>
            <div className="hr"></div>
            <div className="item-content">
              <div className="address">
                Địa chỉ: <span>{!contact ? "" : contact[0]?.address}</span>
              </div>
              <div className="contact">
                <div className="phone">
                  Điện thoại: <span>{!contact ? "" : contact[0]?.phone}</span>
                </div>
                <div className="email">
                  Email: <span>{!contact ? "" : contact[0]?.email}</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} className="footer-item">
            <div className="item-title">Đường dẫn nhanh</div>
            <div className="hr"></div>
            <div className="item-content">
              <div className="item-link">
                <div className="link">
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <Link>Trang chủ</Link>
                </div>
                <div className="link">
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <Link>Dịch vụ</Link>
                </div>
                <div className="link">
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <Link>Cửa hàng thú cưng</Link>
                </div>
                <div className="link">
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <Link>Tin tức</Link>
                </div>
                <div className="link">
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="chevron-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
                    >
                      <path
                        fill="currentColor"
                        d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <Link>Liên hệ</Link>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} className="footer-item">
            <div className="item-title">Mạng xã hội</div>
            <div className="hr"></div>
            <div className="item-content">
              {socialNetwork?.map((ok) => (
                <div className="icon" style={{ background: ok.color }}>
                  {renderHTML(ok.icon)}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
