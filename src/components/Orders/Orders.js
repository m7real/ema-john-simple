import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb2";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart); //using state as we have to add delete item button in the orders list

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
    console.log(remaining);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No Items For Review. Please <Link to="/">Go To Shop</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/">
            <button>Shop More</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
