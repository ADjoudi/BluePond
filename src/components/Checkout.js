import React from "react";
import lock from "../assets/lock.svg";
import "../css/checkout.css";

function Item(props) {
  const { productName, added, totalPrice } = props.info;
  return (
    <div className="checkoutItem">
      <div className="box" />
      <h2>{added}</h2>
      <h2>{productName}</h2>
      <h2>{totalPrice.toFixed(2)} $</h2>
    </div>
  );
}

export default function Checkout(props) {
  let list = props.cartList;
  let total = 0;
  list.forEach((item) => {
    total = total + item.totalPrice;
  });
  return (
    <div className="checkout">
      <div className="checkoutCart">
        <header>
          <h1>Cart</h1>
          <h1 className="total">Total : {total}$</h1>
        </header>
        <div className="checkoutItems">
          {list
            ? list.map((item) => <Item key={item.id} info={item} />)
            : () => {}}
        </div>
      </div>
      <div className="payment">
        <h1>Payement Details</h1>
        <div className="lock">
          <img src={lock} alt="locked" />
          <h3>Currently unavailable</h3>
        </div>
      </div>
    </div>
  );
}
