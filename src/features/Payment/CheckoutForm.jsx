import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import billApi from "../../api/billApi";
import petApi from "../../api/petApi";
import productApi from "../../api/productApi";
import stripeApi from "../../api/stripeApi";
import { resetCart } from "../../app/Slice/CartSlide";
import { messageShowErr, messageShowSuccess } from "../../function";
import "./card.css";
import Cardinput from "./CardInput";
export default function CheckoutForm({ price }) {
    const [btn, setBtn] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const userInfor = useSelector((state) => state.user.userInfor);
    const listCart = useSelector((state) => state.cart.listCart);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setBtn(false);
        var res = await stripeApi
            .poststripe({ email: userInfor.email, price: price * 100 })
            .then((ok) => {
                return ok.client_secret;
            });
        var clientSecret = res;
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: userInfor.email,
                },
            },
        });
        if (result.error) {
            messageShowErr("Số thẻ hoặc thông tin khác không hợp lệ!");
        } else {
            if (result.paymentIntent.status === "succeeded") {
                console.log("thanh cong");
                // Axios.post("http://localhost:666/sendemail/", {
                //     thanhtien: thanhtien,
                //     email: email,
                //     tentour: tentour,
                // });
                billApi
                    .postbill({
                        userName: userInfor.firstName + " " + userInfor.lastName,
                        address: userInfor.address,
                        phone: userInfor.phone,
                        listProduct: JSON.stringify(listCart),
                        price: userInfor.price,
                    })
                    .then((ok) => {
                        //xử lý khi người dùng bấm đồng ý
                        let quantityProduct = [];
                        let quantityPet = [];
                        listCart.forEach((el) => {
                            if (!el.type) {
                                quantityProduct.push({
                                    id: el.id,
                                    quantity: el.quantity - el.quantityCurrent,
                                    avatar: el.avatar,
                                });
                            } else {
                                quantityPet.push({
                                    id: el.id,
                                    checkAdmin: el.checkAdmin,
                                    type: el.type,
                                    quantity: el.quantity - el.quantityCurrent,
                                });
                            }
                        });
                        if (quantityProduct.length !== 0) {
                            productApi.updateQuantityProduct(quantityProduct);
                        }
                        if (quantityPet.length !== 0) {
                            petApi.updateQuantityPet(quantityPet);
                        }
                        dispatch(resetCart());

                        messageShowSuccess("Thanh toán thành công!");
                    });
                history.goBack();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Cardinput />
            {btn ? (
                <button className="btn-payment" disabled={!stripe}>
                    Thanh toán
                </button>
            ) : (
                <button className="btn-payment ac" disabled={false}>
                    Thanh toán
                </button>
            )}
        </form>
    );
}
