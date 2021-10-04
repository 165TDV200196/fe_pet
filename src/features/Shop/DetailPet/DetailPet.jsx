import { Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import renderHtml from "react-render-html";
import { useParams } from "react-router-dom";
import petApi from "../../../api/petApi";
import productApi from "../../../api/productApi";
import "../../../sass/Shop/DetailPet.scss";
import Banner from "../../Banner/Banner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Related from "../Related/Related";
import "./DetailPetJs";
import { ClickImg } from "./DetailPetJs";
export default function DetailPet() {
  const [data, setData] = useState(null);
  const [quantityNumber, setQuantityNumber] = useState(1);
  const hangdleQuantityNumber = (e) => {
    setQuantityNumber(e.target.value);
  };
  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Cửa hàng", link: "/Shop" },
    { name: data?.name },
  ];
  const { id, type } = useParams();
  const imgActiveEl = useRef(null);
  const listImgEl = useRef(null);
  useEffect(() => {
    if (type === "pet") {
      petApi.getOne(id).then((ok) => {
        setData(ok);
      });
    } else {
      productApi.getOne(id).then((ok) => {
        setData(ok);
      });
    }
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    ClickImg(imgActiveEl.current, listImgEl.current);
  }, [data]);
  return (
    <div className="DetailPet">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="product-img">
              <div className="img-active">
                <img src={data?.avatar} alt="" ref={imgActiveEl} />
              </div>
              <div className="list-img" ref={listImgEl}>
                {type === "pet"
                  ? data?.imgpet?.map((ok) => (
                      <div className="img">
                        <img src={ok.link} alt="" />
                      </div>
                    ))
                  : data?.imgproduct?.map((ok) => (
                      <div className="img">
                        <img src={ok.link} alt="" />
                      </div>
                    ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="item-content">
              <div className="name">{data?.name}</div>
              <div className="price">
                {/* <div className="price1">
                  <del>400.000</del>
                </div> */}
                <div className="price2">
                  {parseInt(data?.price).toLocaleString()}
                </div>
                <div className="gia">VNĐ</div>
              </div>
              <div className="description">
                <div className="title">Mô tả</div>
                <div className="content">{data?.description}</div>
              </div>
              <div className="high-light">
                <div className="title">Điểm nổi bật</div>
                <div className="content">
                  {renderHtml(data ? data.text : "")}
                </div>
              </div>
              {type !== "pet" ? (
                <div className="quantity">
                  <div className="title">Số lượng: {data?.quantity}</div>
                  <div className="title">
                    Nhập số lượng muốn mua:{" "}
                    <input
                      type="number"
                      className="input_quantity"
                      value={quantityNumber}
                      onChange={hangdleQuantityNumber}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="button">
                <div className="add-cart">Thêm vào giỏ</div>
                <div className="buy">Mua ngay</div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Related />
      </div>
    </div>
  );
}
