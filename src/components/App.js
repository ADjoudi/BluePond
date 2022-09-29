import "../css/App.css";
import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Landing from "./Landing";
import Showcase from "./Showcase";
import Cart from "./Cart";

function App(props) {
  const [toggleCart, setToggleCart] = useState(false);
  const handleCartClick = () => {
    setToggleCart(true);
  };
  const handleExitClick = () => {
    setToggleCart(false);
  };

  return (
    <div className="App">
      <SideNav />
      <Header handleCartClick={handleCartClick} />
      <Landing />
      {toggleCart && <Cart handleExitClick={handleExitClick} />}
    </div>
  );
}

export default App;
