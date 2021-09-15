import { Grid } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import img2 from "../../../images/pet-colum2.jpg";
import img3 from "../../../images/pet3.jpg";
import img4 from "../../../images/pet4.jpg";
import img5 from "../../../images/pet5.jpg";
import "../../../sass/Shop/DetailPet.scss";
import Banner from "../../Banner/Banner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Footer from "../../Home/Footer/Footer";
import Related from "../Related/Related";
import "./DetailPetJs";
import { ClickImg } from "./DetailPetJs";
export default function DetailPet() {
  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Cửa hàng", link: "/Shop" },
    { name: "ten san pham" },
  ];
  const imgActiveEl = useRef(null);
  const listImgEl = useRef(null);
  useEffect(() => {
    ClickImg(imgActiveEl.current, listImgEl.current);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="DetailPet">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="product-img">
              <div className="img-active">
                <img src={img2} alt="" ref={imgActiveEl} />
              </div>
              <div className="list-img" ref={listImgEl}>
                <div className="img ">
                  <img src={img2} alt="" />
                </div>
                <div className="img">
                  <img src={img3} alt="" />
                </div>
                <div className="img">
                  <img src={img4} alt="" />
                </div>
                <div className="img">
                  <img src={img5} alt="" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="item-content">
              <div className="name">Chó Shiba</div>
              <div className="price">
                <div className="price1">
                  <del>400.000</del>
                </div>
                <div className="price2">500.000</div>
                <div className="gia">VNĐ</div>
              </div>
              <div className="description">
                <div className="title">Mô tả</div>
                <div className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet et vel rerum culpa dolor at recusandae porro aliquam,
                  voluptates veniam maxime, est natus tempora enim quidem
                  temporibus distinctio nesciunt excepturi?
                </div>
              </div>
              <div className="high-light">
                <div className="title">Điểm nổi bật</div>
                <div className="content">
                  <ul>
                    <li>Thân hình nhỏ gọn</li>
                    <li>Ăn ít </li>
                    <li>Giữ nhà tốt</li>
                    <li>Tiếng sủa lớn</li>
                  </ul>
                </div>
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
      <Footer />
    </div>
  );
}
