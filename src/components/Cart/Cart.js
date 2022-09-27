import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   can also be done like this
  //   let total2 = 0;
  //   let shipping2 = 0;
  //   for (const product of cart) {
  //     total2 = total2 + product.price;
  //     shipping2 = shipping2 + product.shipping;
  //   }
  let cart2 = [...cart];
  for (const product in cart) {
    if (product.quantity) {
      const extraProduct = [];
      for (let i = 1; i < product.quantity; i++) {
        extraProduct.push(product);
      }
      cart2 = [...cart, ...extraProduct];
    }
  }

  const total = cart.reduce((p, c) => p + c.price, 0);
  const shipping = cart.reduce((p, c) => p + c.shipping, 0);
  const tax = total * 0.1; // we could used toFixed(2) here, but then we had to convert it to number from string;

  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <div className="cart-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default Cart;
