import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  //   can also be done like this
  // let total = 0;
  // let shipping = 0;
  // let quantity = 0;
  // for (const product of cart) {
  //   quantity = quantity + product.quantity;
  //   total = total + product.price * product.quantity;
  //   shipping = shipping + product.shipping;
  // }

  const total = cart.reduce((p, c) => p + c.price * c.quantity, 0);
  const shipping = cart.reduce((p, c) => p + c.shipping, 0);
  const quantity = cart.reduce((p, c) => p + c.quantity, 0);
  const tax = total * 0.1; // we could used toFixed(2) here, but then we had to convert it to number from string;

  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        <button onClick={clearCart}>Clear Cart</button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
