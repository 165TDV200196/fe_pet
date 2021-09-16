import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import img1 from "../../../images/pet4.jpg";
import img2 from "../../../images/1227.gif";
import "../../../sass/ListNews/New.scss";
import Footer from "../../Home/Footer/Footer";
import newApi from "../../../api/newApi";
import { Link } from "react-router-dom";
import renderHtml from "react-render-html";
import { facebook, google, twitter } from "../../Admin/svg/IconSvg";
export default function DetailNew() {
  const listBread = [
    { name: "Trang chủ", link: "/" },
    { name: "Tin tức", link: "/ListNews" },
    { name: "Tên tin tức" },
  ];
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    newApi
      .getOne(id)
      .then((ok) => {
        setData(ok);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="DetailNew">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12}>
            <div className="new">
              <div className="new-title">{data?.name}</div>
              <div className="new-tag">
                {data?.Tags?.map((oki) => (
                  <div className="tag">{oki.name}</div>
                ))}
              </div>
              <div className="new-author">
                <div className="avatar">
                  <img src={data?.avatar} alt="" />
                </div>
                <div className="name">Quỳnh chi</div>
                <div className="time"> lúc 26 Tháng Hai, 2021</div>
              </div>
              <div className="new-content">
                {renderHtml(data ? data.content : "")}
              </div>
              <div className="new-share">
                <div className="text">Chia sẻ ngay</div>
                <div className="icon-share">
                  <div className="icon" style={{ backgroundColor: "#087ceb" }}>
                    {facebook}
                  </div>
                  <div className="icon" style={{ backgroundColor: "#1da1f3" }}>
                    {twitter}
                  </div>
                  <div className="icon" style={{ backgroundColor: "#ea4235" }}>
                    {google}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <div className="other">
              <div className="other-new">
                <div className="other-new-title">Có thể bạn quan tâm</div>
                <div className="other-new-content">
                  <ul>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.Làm cho thú cưng của bạn trở nên hạnh phúc
                            hơn bao giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.Làm cho thú cưng của bạn trở nên hạnh phúc
                            hơn bao giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>{" "}
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div className="new-other">
                          <div className="img">
                            <img src={img1} alt="" />
                          </div>
                          <div className="title">
                            Làm cho thú cưng của bạn trở nên hạnh phúc hơn bao
                            giờ hết.
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hr"></div>
              <div className="poster">
                <img src={img2} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
