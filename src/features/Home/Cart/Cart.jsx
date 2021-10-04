import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import "../../../sass/Home/Cart.scss";
import { cart } from "../../Admin/svg/IconSvg";
import imga from "../../../images/cat1.jpg";
export default function Cart() {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div className="cart">
      <div className="number">1</div>
      <div className="icon" onClick={() => setToggleDrawer(!toggleDrawer)}>
        {cart}
      </div>
      <Drawer
        key="12"
        anchor="right"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(!toggleDrawer)}
      >
        <div className="cart-content">
          <div className="title">
            Giỏ hàng <div className="hr"></div>
          </div>
          <div className="content">
            <div className="content-header">
              <div className="sp">Sản phẩm</div>
              <div className="dg">Đơn giá</div>
              <div className="sl">Số lượng</div>
              <div className="st">Số tiền</div>
              <div className="tt">Thao tác</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
            <div className="content-product">
              <div className="sp">
                <div className="avatar">
                  <img src={imga} alt="" />
                </div>
                <div className="text">nguyen van kien</div>
              </div>
              <div className="dg">₫13000</div>
              <div className="sl">4</div>
              <div className="st">₫53000</div>
              <div className="tt">Xoá</div>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Thanh toán</button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
