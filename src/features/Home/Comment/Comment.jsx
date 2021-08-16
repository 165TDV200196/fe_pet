import { Container } from "@material-ui/core";
import React from "react";
import Rating from "@material-ui/lab/Rating";
import avatar1 from "../../../images/avatar1.jpg";
import avatar2 from "../../../images/avatar2.jpg";
import "../../../sass/Home/Comment.scss";
export default function Comment() {
  return (
    <div className="Comment">
      <div className="heading">
        <div className="heading__title">
          <h3>Nhận xét người dùng</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <Container maxWidth="lg">
        <div className="comment-content">
          <div className="comment-list">
            <div className="comment-item">
              <div className="item">
                <div className="icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-left fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M448 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16c-92.6 0-168 75.4-168 168v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128zM176 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16C75.4 32 0 107.4 0 200v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, nihil. Totam, quisquam iure minus necessitatibus quidem
                  incidunt aperiam enim repellendus magnam facilis omnis illo
                  expedita, sequi neque non iste vel.
                </div>
                <div className="icon end">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-right fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M176 32H64C28.7 32 0 60.7 0 96v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56H56c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136H56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216zM448 32H336c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56h-16c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136h-16c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56h-96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="user">
                  <div className="avatar">
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="name">Nguyễn Thị Thái</div>
                  <div className="star">
                    <Rating value={5} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-left fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M448 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16c-92.6 0-168 75.4-168 168v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128zM176 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16C75.4 32 0 107.4 0 200v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, nihil. Totam, quisquam iure minus necessitatibus quidem
                  incidunt aperiam enim repellendus magnam facilis omnis illo
                  expedita, sequi neque non iste vel.
                </div>
                <div className="icon end">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-right fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M176 32H64C28.7 32 0 60.7 0 96v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56H56c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136H56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216zM448 32H336c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56h-16c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136h-16c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56h-96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="user">
                  <div className="avatar">
                    <img src={avatar2} alt="" />
                  </div>
                  <div className="name">Nguyễn Thị Thái</div>
                  <div className="star">
                    <Rating value={3} />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-left fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M448 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16c-92.6 0-168 75.4-168 168v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128zM176 224h-64v-24c0-30.9 25.1-56 56-56h16c22.1 0 40-17.9 40-40V72c0-22.1-17.9-40-40-40h-16C75.4 32 0 107.4 0 200v216c0 35.3 28.7 64 64 64h112c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64zm32 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V200c0-75.1 60.9-136 136-136h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8h-16c-48.6 0-88 39.4-88 88v56h96c17.7 0 32 14.3 32 32v128z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, nihil. Totam, quisquam iure minus necessitatibus quidem
                  incidunt aperiam enim repellendus magnam facilis omnis illo
                  expedita, sequi neque non iste vel.
                </div>
                <div className="icon end">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="quote-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-quote-right fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M176 32H64C28.7 32 0 60.7 0 96v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56H56c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136H56c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216zM448 32H336c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h64v24c0 30.9-25.1 56-56 56h-16c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c92.6 0 168-75.4 168-168V96c0-35.3-28.7-64-64-64zm32 280c0 75.1-60.9 136-136 136h-16c-4.4 0-8-3.6-8-8v-32c0-4.4 3.6-8 8-8h16c48.6 0 88-39.4 88-88v-56h-96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h112c17.7 0 32 14.3 32 32v216z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="user">
                  <div className="avatar">
                    <img src={avatar2} alt="" />
                  </div>
                  <div className="name">Nguyễn Thị Thái</div>
                  <div className="star">
                    <Rating value={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
