import "../css/App.css";
import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Landing from "./Landing";
import Showcase from "./Showcase";
import Cart from "./Cart";
import placeholder from "../assets/placeholder.png";

function App(props) {
  const [toggleCart, setToggleCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const info = [
    {
      id: "f1das64",
      productName: "Chair",
      productImage: placeholder,
      price: 19.99,
      totalPrice: 19.99,
      added: 1,
    },
    {
      id: "fadfgda4566",
      productName: "Another",
      productImage: placeholder,
      price: 30.5,
      totalPrice: 30.5,
      added: 1,
    },
    {
      id: "fds554",
      productName: "Dup",
      productImage: placeholder,
      price: 11.99,
      totalPrice: 11.99,
      added: 1,
    },
    {
      id: "fdafd626",
      productName: "BG Blue",
      productImage: placeholder,
      price: 27.99,
      totalPrice: 27.99,
      added: 1,
    },
  ];

  const handleAddToCart = (event) => {
    let id = event.currentTarget.getAttribute("idkey");

    let includesItem = false;
    cartList.forEach((cartItem) => {
      if (cartItem.id === id) includesItem = true;
    });
    if (includesItem) return;

    let itemById = info.find((item) => item.id === id);
    if (!itemById) return;
    setCartList(cartList.concat(itemById));
  };

  const increment = (event) => {
    let id = event.currentTarget.getAttribute("id");
    let newList = cartList;
    newList.forEach((cartItem) => {
      if (cartItem.id === id) {
        cartItem.added = cartItem.added + 1;
        cartItem.totalPrice = cartItem.price * cartItem.added;
      }
    });
    setCartList([...newList]);
  };

  const decrement = (event) => {
    let id = event.currentTarget.getAttribute("id");
    let newList = cartList;
    newList.forEach((cartItem) => {
      if (cartItem.id === id && cartItem.added > 0) {
        cartItem.added = cartItem.added - 1;
        cartItem.totalPrice = cartItem.price * cartItem.added;
      }
    });
    setCartList([...newList]);
  };

  return (
    <div className="App">
      <SideNav />
      <Header handleCartClick={() => setToggleCart(true)} />
      <Landing items={info} handleAddToCart={handleAddToCart} />
      {toggleCart && (
        <Cart
          handleExitClick={() => setToggleCart(false)}
          list={cartList}
          handleAddSub={setCartList}
          increment={increment}
          decrement={decrement}
        />
      )}
    </div>
  );
}

export default App;
