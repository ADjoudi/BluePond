import React from "react";
import "../styles/landing.scss";
import add from "../assets/add.svg";
import check from "../assets/check.svg";
import starFilled from "../assets/star-filled.svg";
import click from "../assets/click.svg";
import { Link, useOutletContext } from "react-router-dom";

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
      <Link to={`/shop/product/${id}`}>
        <div className="information">
          <h2>{productName}</h2>
          <img className="indicator" src={click} alt="" />
          <h3>{description}</h3>

          <div className="rating">
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
            <img src={starFilled} alt="+" />
          </div>
          <h2 className="price-item">${price.toFixed(2)}</h2>
        </div>
      </Link>
    </div>
  );
}

export default function Landing() {
  const { info, cartList, handleAddToCart, handleRemoveFromCart } =
    useOutletContext();
  return (
    <div className="landing">
      {info.map((item) => (
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
