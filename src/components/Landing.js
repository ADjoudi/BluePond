import React from "react";
import "../css/landing.css";
import placeholder from "../assets/placeholder.png";

function Item(props) {
  return (
    <div className="item">
      <img src={placeholder} alt="Product" />
      <div className="information">
        <h2>Product Name</h2>
        <h3>00.00$</h3>
      </div>
    </div>
  );
}

export default function Landing(props) {
  return (
    <div className="landing">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
