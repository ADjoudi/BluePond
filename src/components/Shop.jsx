import "../styles/Shop.scss";
import { useState, useEffect } from "react";
import SideNav from "./SideNav.jsx";
import Header from "./Header";
import CartWindow from "./Cart";
import { Outlet } from "react-router-dom";
import info from "./data";

function Shop() {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth / 16);

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
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth / 16);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="page">
      <SideNav windowWidth={width} title="shop" />
      <Header
        windowWidth={width}
        isShop={true}
        nbrItems={cartList.length}
        handleCartClick={() => setToggleCart(true)}
      />
      {toggleCart && (
        <CartWindow
          handleExitClick={() => setToggleCart(false)}
          list={cartList}
          handleRemoveFromCart={handleRemoveFromCart}
          increment={increment}
          decrement={decrement}
        />
      )}

      <Outlet
        context={{
          cartList,
          info,
          handleAddToCart,
          handleRemoveFromCart,
          increment,
          decrement,
        }}
      />
    </div>
  );
}

export default Shop;
