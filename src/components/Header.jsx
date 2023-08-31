import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import menu from "../assets/menu.svg";
import cart from "../assets/cart.svg";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({
  windowWidth,
  isShop,
  nbrItems,
  handleCartClick,
}) {
  return windowWidth < 56.25 ? (
    <header className="header">
      <div className="nav">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/shop">Shop</Link>
        </h1>
      </div>
      <div className="language">
        <img src={menu} alt="menu" />
      </div>
      {isShop && (
        <>
          <div className="search">
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <div className="user">
            <div className="cart-container" onClick={handleCartClick}>
              {nbrItems > 0 ? (
                <h4 style={{ backgroundColor: "red" }}>{nbrItems}</h4>
              ) : (
                <h4>{nbrItems}</h4>
              )}
              <img src={cart} alt="cart" />
            </div>
          </div>
        </>
      )}
    </header>
  ) : (
    <header className="header">
      <div className="nav">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/shop">Shop</Link>
        </h1>
        <div className="categories">
          <h1>Hot</h1>
          <h1>New</h1>
          <h1>Essentials</h1>
          <h1>Accessories</h1>
        </div>
      </div>
      <div className="language">
        <h1>English</h1>
        <h1>العربية</h1>
      </div>
      {isShop && (
        <>
          <div className="search">
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <div className="user">
            <img className="profile-image" src={profile} alt="profile" />
            <div className="cart-container" onClick={handleCartClick}>
              {nbrItems > 0 ? (
                <h4 style={{ backgroundColor: "red" }}>{nbrItems}</h4>
              ) : (
                <h4>{nbrItems}</h4>
              )}
              <img src={cart} alt="cart" />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
