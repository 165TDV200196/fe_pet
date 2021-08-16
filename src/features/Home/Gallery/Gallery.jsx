import { Container } from "@material-ui/core";
import React from "react";
import img1 from "../../../images/pet1.jpg";
import img2 from "../../../images/pet2.jpg";
import img3 from "../../../images/pet3.jpg";
import img4 from "../../../images/pet4.jpg";
import img5 from "../../../images/pet5.jpg";
import img6 from "../../../images/pet6.jpg";
import img7 from "../../../images/pet7.jpg";
import img8 from "../../../images/pet8.jpg";
import img9 from "../../../images/pet9.jpg";
import "../../../sass/Home/Gallery.scss";
export default function Gallery() {
  return (
    <div className="Gallery">
      <div className="heading">
        <div className="heading__title">
          <h3>Phòng trưng bày ảnh</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <Container maxWidth="lg">
        <div className="post-grid">
          <div className="grid-item">
            <img src={img1} alt="" />
          </div>
          <div className="grid-item">
            <img src={img2} alt="" />
          </div>
          <div className="grid-item">
            <img src={img3} alt="" />
          </div>
          <div className="grid-item">
            <img src={img4} alt="" />
          </div>
          <div className="grid-item">
            <img src={img5} alt="" />
          </div>
          <div className="grid-item ">
            <img src={img9} alt="" />
          </div>
          <div className="grid-item ">
            <img src={img7} alt="" />
          </div>
          <div className="grid-item ">
            <img src={img8} alt="" />
          </div>
          <div className="grid-item ">
            <img src={img6} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
