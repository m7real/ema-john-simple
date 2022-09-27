import React from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  // const { product, handleAddToCart } = props;
  const { name, seller, price, ratings, img } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
      </div>
      <div className="product-footer">
        <div className="product-others">
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings}</p>
        </div>
        <button onClick={() => handleAddToCart(product)} className="btn-cart">
          <p>
            <span className="btn-cart-text">Add To Cart</span> <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Product;
