import React from "react";
import "../styles/landing.scss";
import add from "../assets/add.svg";
import check from "../assets/check.svg";
import starFilled from "../assets/star-filled.svg";

function Item({ info, handleAddToCart, handleRemoveFromCart, cartList }) {
  const { id, productName, productImage, price, description } = info;

  return (
    <div className="item" style={{ backgroundImage: `url(${productImage})` }}>
      <div className="add">
        {cartList.find((item) => item.id === id) ? (
          <img src={check} alt="-" id={id} onClick={handleRemoveFromCart} />
        ) : (
          <img src={add} alt="+" id={id} onClick={handleAddToCart} />
        )}
      </div>
      <div className="information">
        <h2>{productName}</h2>
        <h3>{description}</h3>
        <div className="info">
          <div className="rating">
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
          </div>
          <h2>${price.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default function Landing({
  items,
  handleAddToCart,
  handleRemoveFromCart,
  cartList,
}) {
  return (
    <div className="landing">
      {items.map((item) => (
        <Item
          key={item.id}
          info={item}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          cartList={cartList}
        />
      ))}
    </div>
  );
}
