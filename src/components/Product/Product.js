import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  //   console.log(props.product);
  const { name, seller, price, stock, img , star } = props.product;

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="d-flex  border-bottom py-3 me-2">
      <img src={img} alt="" />
      <div className="ms-2 ">
        <h3 className="text-primary"> {name} </h3>
        <p className="lead fs-4">by: {seller} </p>
        <Rating   initialRating={star} emptySymbol="far fa-star text-warning" fullSymbol="fas fa-star text-warning" readonly ></Rating>
        <p className="lead fs-4">${price} </p>
        <p className="lead fs-5">
          only <b>{stock}</b> left in stock - order soon
        </p>
        <button onClick={() => props.HandleAddToCart(props.product)} className="btn btn-warning fs-5 px-5">
          {cartIcon} Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
