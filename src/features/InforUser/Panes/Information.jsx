import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../../../api/userApi";
import { getMale } from "../../../function";
import "../../../sass/InforUser/Information.scss";
export default function Information() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      userApi.getOne(id).then((ok) => {
        setData(ok);
      });
    }
  }, []);
  return (
    <div className="tab-pane">
      <div className="information">
        <div className="avatar">
          <img src={data?.avatar} alt="" />
        </div>
        <div className="title">
          <div className="name">
            {data?.firstName} {data?.lastName}
          </div>
          <div className="line"></div>
          <div className="title-content">
            <div className="left">
              <div className="text">Địa chỉ: {data?.address}</div>
              <div className="text">Email: {data?.email}</div>
            </div>
            <div className="right">
              <div className="text">Số điện thoại: {data?.phone}</div>
              <div className="text">Giới tính: {getMale(data?.male)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
