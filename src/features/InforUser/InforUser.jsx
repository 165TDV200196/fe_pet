import { Container } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import Banner from "../Banner/Banner";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "../../sass/Home/Tabs.scss";
import { bar, dog, search, setting, userHome } from "../Admin/svg/IconSvg";
import { tabJs } from "./tab";
import Information from "./Panes/Information";
import EditInformation from "./Panes/EditInformation";
import CreatePet from "./Panes/CreatePet";
export default function InforUser() {
  const listBread = [{ name: "Trang chủ", link: "/" }, { name: "Thông tin" }];
  const itemsEl = useRef(null);
  const panesEl = useRef(null);
  const lineEl = useRef(null);
  useEffect(() => {
    tabJs(itemsEl.current, panesEl.current, lineEl.current);
  }, []);
  return (
    <div className="UserInfor">
      <Banner />
      <Breadcrumbs breadCrumbList={listBread} />
      <Container>
        <div className="tabs">
          <div className="items" ref={itemsEl}>
            <div class="tab-item ">
              <div className="icon">{userHome}</div>
              Thông tin người dùng
            </div>
            <div class="tab-item ">
              <div className="icon">{setting}</div>
              Sửa thông tin
            </div>
            <div class="tab-item ">
              <div className="icon">{dog}</div>
              Đăng bán thú cưng
            </div>
            <div className="line" ref={lineEl}></div>
          </div>
          <div className="panes" ref={panesEl}>
            <Information />
            <EditInformation />
            <CreatePet />
          </div>
        </div>
      </Container>
    </div>
  );
}
