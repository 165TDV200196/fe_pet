import { Container } from "@material-ui/core";
import React from "react";
import Banner from "../../Banner/Banner";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Footer from "../../Home/Footer/Footer";

export default function DetailPet() {
  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Cửa hàng", link: "/Shop" },
    { name: "ten san pham" },
  ];
  return (
    <div className="DetailPet">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>ád</Container>
      <Footer />
    </div>
  );
}
