import React from "react";
import "../css/landing.css";

function Item(props) {
  let { id, productName, productImage, price } = props.info;
  return (
    <div className="item">
      <img src={productImage} alt="Product" />
      <div className="information" onClick={props.handleAddToCart} idkey={id}>
        <h2>{productName}</h2>
        <h3>{price.toFixed(2)}$</h3>
      </div>
    </div>
  );
}

export default function Landing(props) {
  let items = props.items;
  return (
    <div className="landing">
      {items.map((item, index) => (
        <Item
          key={item.id}
          info={item}
          handleAddToCart={props.handleAddToCart}
        />
      ))}
    </div>
  );
}
