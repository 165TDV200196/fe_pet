import { Container, Grid } from "@material-ui/core";
import React from "react";
import "../../../sass/Shop/Related.scss";
import img2 from "../../../images/pet4.jpg";
import { Link } from "react-router-dom";
export default function Related() {
  return (
    <div className="Related">
      <div className="heading">
        <div className="heading__title">
          <h3>Sản phẩm liên quan</h3>
        </div>
        <div className="heading__hr"></div>
      </div>
      <Grid container spacing={3}>
        <Grid item lg={3} md={4} sm={6}>
          <div className="item-pet">
            <div className="img">
              <img src={img2} alt="" />
              <div className="add-cart">Thêm vào giỏ</div>
              <div className="blur"></div>
            </div>
            <div className="name">
              <Link>Chó shiba</Link>
            </div>
            <div className="price">
              <div className="price1">
                <del>400.000</del>
              </div>
              <div className="price2">500.000</div>{" "}
              <div className="gia">VNĐ</div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <div className="item-pet">
            <div className="img">
              <img src={img2} alt="" />
              <div className="add-cart">Thêm vào giỏ</div>
              <div className="blur"></div>
            </div>
            <div className="name">
              <Link>Chó shiba</Link>
            </div>
            <div className="price">
              <div className="price1">
                <del>400.000</del>
              </div>
              <div className="price2">500.000</div>{" "}
              <div className="gia">VNĐ</div>
            </div>
          </div>
        </Grid>

        <Grid item lg={3} md={4} sm={6}>
          <div className="item-pet">
            <div className="img">
              <img src={img2} alt="" />
              <div className="add-cart">Thêm vào giỏ</div>
              <div className="blur"></div>
            </div>
            <div className="name">
              <Link>Chó shiba</Link>
            </div>
            <div className="price">
              <div className="price1">
                <del>400.000</del>
              </div>
              <div className="price2">500.000</div>{" "}
              <div className="gia">VNĐ</div>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} sm={6}>
          <div className="item-pet">
            <div className="img">
              <img src={img2} alt="" />
              <div className="add-cart">Thêm vào giỏ</div>
              <div className="blur"></div>
            </div>
            <div className="name">
              <Link>Chó shiba</Link>
            </div>
            <div className="price">
              <div className="price1">
                <del>400.000</del>
              </div>
              <div className="price2">500.000</div>{" "}
              <div className="gia">VNĐ</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
