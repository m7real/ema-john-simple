// use loacal storage to manage store data

const getStoredCart = () => {
  const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart")) || {};
  return shoppingCart;
};

const addToDb = (id) => {
  // const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart")) || {}; // _-_DRY_-_
  const shoppingCart = getStoredCart();

  let quantity = shoppingCart[id] || 0;
  quantity++;
  shoppingCart[id] = quantity;

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));

  // .? used to handle err when there won't any shopping cart in localStorage, also you can use shortcut || {} instead while declaring in the previous line
  if (shoppingCart?.[id]) {
    delete shoppingCart[id];

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { getStoredCart, addToDb, removeFromDb, deleteShoppingCart };
