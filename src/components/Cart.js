import React from "react";
import exit from "../assets/exit.svg";
import "../css/cart.css";

export default function Cart(props) {
  return (
    <div className="cartWindow">
      <div className="overlay"></div>
      <div className="cart">
        <header>
          <h1>CART</h1>
          <img src={exit} alt="exit" onClick={props.handleExitClick} />
        </header>
        <div className="listProducts">
          <div className="cartItem">
            <h2>Chair</h2>
            <h3>19.99$</h3>
            <div className="counter">
              <h2>-</h2>
              <h2>1</h2>
              <h2>+</h2>
            </div>
            <h2>200.99$</h2>
          </div>
          <div className="cartItem">
            <h2>Chair</h2>
            <h3>19.99$</h3>
            <div className="counter">
              <h2>-</h2>
              <h2>1</h2>
              <h2>+</h2>
            </div>
            <h2>200.99$</h2>
          </div>
        </div>
        <div className="totalArea">
          <h2>Total</h2>
          <h2>200.99$</h2>
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}
