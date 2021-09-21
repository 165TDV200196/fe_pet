import { Grid } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import img2 from "../../../images/pet-colum2.jpg";
import img3 from "../../../images/pet3.jpg";
import img4 from "../../../images/pet4.jpg";
import img5 from "../../../images/pet5.jpg";
import "../../../sass/Shop/DetailPet.scss";
import { useParams } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Footer from "../../Home/Footer/Footer";
import petApi from "../../../api/petApi";
import Related from "../Related/Related";
import renderHtml from "react-render-html";
import "./DetailPetJs";
import { ClickImg } from "./DetailPetJs";
export default function DetailPet() {
  const [pet, setPet] = useState(null);

  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Cửa hàng", link: "/Shop" },
    { name: pet?.name },
  ];
  const { id } = useParams();
  const imgActiveEl = useRef(null);
  const listImgEl = useRef(null);
  useEffect(() => {
    petApi.getOne(id).then((ok) => {
      setPet(ok);
    });
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    ClickImg(imgActiveEl.current, listImgEl.current);
  }, [pet]);
  return (
    <div className="DetailPet">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="product-img">
              <div className="img-active">
                <img src={pet?.avatar} alt="" ref={imgActiveEl} />
              </div>
              <div className="list-img" ref={listImgEl}>
                {pet?.imgpet?.map((ok) => (
                  <div className="img">
                    <img src={ok.link} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="item-content">
              <div className="name">{pet?.name}</div>
              <div className="price">
                {/* <div className="price1">
                  <del>400.000</del>
                </div> */}
                <div className="price2">
                  {parseInt(pet?.price).toLocaleString()}
                </div>
                <div className="gia">VNĐ</div>
              </div>
              <div className="description">
                <div className="title">Mô tả</div>
                <div className="content">{pet?.description}</div>
              </div>
              <div className="high-light">
                <div className="title">Điểm nổi bật</div>
                <div className="content">{renderHtml(pet ? pet.text : "")}</div>
              </div>
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
