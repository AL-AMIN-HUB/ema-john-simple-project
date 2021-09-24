import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;

  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;

  const grandtotal = total + tax + shipping;
  const reviewItem = <FontAwesomeIcon icon={faShoppingBasket} />;
  return (
    <div>
      <h3 className="text-center">Order Summary</h3>
      <p className="fs-4 text-center">Items ordered: {totalQuantity}</p>
      <p className="fs-4">Items Total: ${total.toFixed(2)}</p>
      <p className="fs-4 ">Shipping Charge: ${shipping.toFixed(2)}</p>
      <p className="fs-4 border-bottom">Tax: ${tax.toFixed(2)}</p>
      <p className="fs-4 text-danger fw-bolder">Grand Total: ${grandtotal.toFixed(2)}</p>
      <div className="text-center">
        <button className="btn btn-warning fs-5 px-3"> {reviewItem} Review your order</button>
      </div>
    </div>
  );
};

export default Cart;
