import React from "react";
import { statusOff, statusOn } from "../svg/IconSvg";
import Table from "../Table/Table";

export default function New() {
  const titleTable = [
    { title: "Tên tin tức", name: "name" },
    { title: "Người đăng", name: "author" },
    { title: "Thời gian", name: "time" },
    { title: "action", name: "action" },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      author: 32,
      time: "10 Downing Street",
      action: statusOn,
    },
    {
      name: "John",
      author: 42,
      action: statusOff,
      key: "2",
      time: "10 Downing Street",
    },
    {
      key: "2",
      name: "Key",
      author: 42,
      time: "10 Downing Street",
    },
    {
      key: "2",
      name: "Kien",
      author: 42,
      time: "10 Downing Street",
    },
  ];
  return (
    <div className="AdminTable">
      <div className="heading">
        <div className="heading__title">
          <h3>Tin tức</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <Table titleTable={titleTable} dataSource={dataSource} />
    </div>
  );
}
