import React from "react";
import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/cart.svg";
import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="nav">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>Hot</h1>
        <h1>New</h1>
        <h1>T-Shirts</h1>
        <h1>Sneakers</h1>
        <h1>Pants</h1>
      </div>
      <div className="language">
        <h1>English</h1>
        <h1>العربية</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <img src={search} alt="search" />
      </div>
      <div className="user">
        <img src={profile} alt="profile" />
        <img src={cart} alt="cart" onClick={props.handleCartClick} />
      </div>
    </header>
  );
}
