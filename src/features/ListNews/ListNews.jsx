import { Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import img1 from "../../images/pet8.jpg";
import "../../sass/ListNews/ListNews.scss";
import Banner from "../Banner/Banner";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Home/Footer/Footer";
export default function ListNews() {
  const listBread = [{ name: "Trang chủ", link: "/" }, { name: "Tin tức" }];
  const { path } = useRouteMatch();
  return (
    <div className="ListNews">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>
        <div className="heading-detail">
          <div className="heading-detail__title">
            <h3>Tin tức</h3>
          </div>
          <div className="heading-detail__hr"></div>
        </div>
        <Grid container spacing={2} className="content-item">
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn Công thức thức ăn của
                    thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6}>
            <div className="item-new">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <div className="text">
                <div className="text-title">
                  <Link to={`${path}/1`}>
                    Công thức thức ăn của thú cưng của bạn
                  </Link>
                </div>
                <div className="text-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum animi optio tenetur quae totam. Voluptates quae minus
                  similique. Tempora dignissimos minus eius fugit molestias
                  saepe amet quasi necessitatibus perferendis ducimus?Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Ex
                  perferendis consequuntur blanditiis dolores velit unde a
                  expedita accusamus sed suscipit error nihil debitis aspernatur
                  neque deleniti doloremque nemo, iure praesentium.
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Pagination
          count={5}
          color="secondary"
          variant="outlined"
          shape="rounded"
        />
      </Container>
      <Footer />
    </div>
  );
}
