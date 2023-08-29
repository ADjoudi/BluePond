import "../styles/Shop.scss";
import { useState } from "react";
import SideNav from "./SideNav.jsx";
import Header from "./Header";
import Cart from "./Cart";
import { Outlet } from "react-router-dom";
import info from "./data";

function Shop() {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartList, setCartList] = useState([]);

  const handleAddToCart = (event) => {
    const id = event.currentTarget.getAttribute("id");
    if (cartList.some((item) => item.id === id)) return;

    const itemById = info.find((item) => item.id === id);
    if (!itemById) return;
    setCartList(cartList.concat(itemById));
  };

  const handleRemoveFromCart = (event) => {
    const id = event.currentTarget.getAttribute("id");
    setCartList((prevCartList) => {
      return prevCartList.filter((item) => item.id !== id);
    });
  };

  const increment = (event) => {
    const id = event.currentTarget.getAttribute("id");
    setCartList((prevCartList) => {
      return prevCartList.map((item) =>
        item.id === id
          ? {
              ...item,
              added: item.added + 1,
              totalPrice: item.price * (item.added + 1),
            }
          : item
      );
    });
  };

  const decrement = (event) => {
    const id = event.currentTarget.getAttribute("id");
    if (cartList.find((item) => item.id === id)["added"] <= 0) return;
    setCartList((prevCartList) => {
      return prevCartList.map((item) =>
        item.id === id
          ? {
              ...item,
              added: item.added - 1,
              totalPrice: item.price * (item.added - 1),
            }
          : item
      );
    });
  };
  return (
    <div className="page">
      <SideNav title="shop" />
      <Header
        isShop={true}
        nbrItems={cartList.length}
        handleCartClick={() => setToggleCart(true)}
      />
      {toggleCart && (
        <Cart
          handleExitClick={() => setToggleCart(false)}
          list={cartList}
          handleRemoveFromCart={handleRemoveFromCart}
          increment={increment}
          decrement={decrement}
        />
      )}

      <Outlet
        context={{ cartList, info, handleAddToCart, handleRemoveFromCart }}
      />
    </div>
  );
}

export default Shop;
