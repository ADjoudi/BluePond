import React, { useState } from "react";
import exit from "../assets/exit.svg";
import "../css/cart.css";
import { Link } from "react-router-dom";

function ItemCart(props) {
  let { id, productName, price, totalPrice, added } = props.info;
  return (
    <div className="cartItem" id={id}>
      <h2>{productName}</h2>
      <h3>{price.toFixed(2)}$</h3>
      <div className="counter">
        <h2 onClick={props.decrement} id={id}>
          -
        </h2>
        <h2>{added}</h2>
        <h2 onClick={props.increment} id={id}>
          +
        </h2>
      </div>
      <h2>{totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default function Cart(props) {
  let list = props.list;
  let total = 0;
  list.forEach((item) => {
    total = total + item.totalPrice;
  });
  return (
    <div className="cartWindow">
      <div className="overlay" onClick={props.handleExitClick}></div>
      <div className="cart">
        <header>
          <h1>CART</h1>
          <img src={exit} alt="exit" onClick={props.handleExitClick} />
        </header>
        <div className="listProducts">
          {list
            ? list.map((item) => (
                <ItemCart
                  key={item.id}
                  info={item}
                  increment={props.increment}
                  decrement={props.decrement}
                />
              ))
            : () => {}}
        </div>
        <div className="totalArea">
          <h2>Total</h2>
          <h2>{total.toFixed(2)}</h2>
        </div>
        <Link to="/checkout">
          <button onClick={props.handleExitClick}>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
