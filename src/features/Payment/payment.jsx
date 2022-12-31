import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./card.css";
import "../../sass/Payment/Payment.scss";
import { useSelector } from "react-redux";
import Axios from "axios";
import { useMemo } from "react";
const stripePromise = loadStripe(
    "pk_test_51I0p5CE2oIGbiAkNsd7EJ9VZNaxZXtDMMfkcDD7s5WyP2PXM4hQ6qcSWGwlGtG4DFwWTFTVzr5AAxEaPYiAQBe6Z008USzew3a"
);
function Stripe(props) {
    // const [usd, setusd] = useState(23060);
    // const [email, setemail] = useState();

    const listCart = useSelector((state) => state.cart.listCart);
    console.log("listCart", listCart);
    // const thanhtoans = useSelector(state => state.thanhtoans);
    // var thanhtoan = [];
    // if (thanhtoan) {
    //     for (let i = 0; i < thanhtoans.length; i++) {
    //         thanhtoan.unshift(thanhtoans[i]);
    //     }
    // }
    // const infor = useSelector(state => state.infor.infor.data);
    // useEffect(() => {
    //     // Axios.get("https://free.currconv.com/api/v7/convert?q=USD_VND&compact=ultra&apiKey=6c24709f2cfc058a0499").then(data => {
    //     //     setusd(data.data.USD_VND)
    //     // })
    //     if (infor) {
    //         Axios.get(`http://localhost:666/users/${infor.id}`).then(data => {
    //             setemail(data.data.data.email);
    //         });
    //     }
    // }, [infor])
    // const tinhSoNguoi = (nguoilon, treem, embe) => {
    //     return +nguoilon + +treem + +embe;
    // }
    // const tinhTongTien = (nguoilon, treem, embe, gianguoilon, giatreem, giaembe) => {
    //     return ((nguoilon * +gianguoilon) + (treem * +giatreem) + (embe * +giaembe));
    // }
    // const quyDoi = (tien, usd) => {
    //     return (tien / usd).toFixed(2)
    // }

    const resultMoney = useMemo(() => {
        return listCart.reduce((a, b) => {
            return a + b.priceResult;
        }, 0);
    }, []);
    const convertMoneyVND = () => {
        return resultMoney.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
    };
    const quyDoi = () => {
        return (resultMoney / giaDola).toFixed(2);
    };

    let giaDola = 24000;

    return (
        <div className="thanhtoan">
            {listCart.length === 0 ? (
                <div>
                    <h2 className="header">Thanh toán online</h2>
                    <div className="warning">
                        <h5 className="text-danger">
                            Chưa nhận được thông tin, bạn vui lòng thử lại!
                        </h5>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="header">Thanh toán online</h2>
                    <div className="container">
                        <div className="content">
                            <div className="info">
                                <div>
                                    <p>
                                        <strong>Tổng tiền</strong>: {convertMoneyVND()}
                                    </p>
                                    <p>
                                        <strong>Quy đổi</strong>: {quyDoi()}${" "}
                                    </p>
                                </div>
                            </div>
                            <div className="input_payment">
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm price={quyDoi()} />
                                </Elements>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Stripe;
