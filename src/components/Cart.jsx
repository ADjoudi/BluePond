import exit from "../assets/exit.svg";
import "../styles/cart.scss";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

function Cart({
  list = [],
  handleExitClick,
  handleRemoveFromCart,
  increment,
  decrement,
}) {
  const total = list.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <div className="cart">
      <header>
        <h1>CART</h1>
        <img src={exit} alt="exit" onClick={handleExitClick} />
      </header>
      <div className="listProducts">
        {list[0] &&
          list.map((item) => (
            <ItemCart
              stylingClass="cartItem"
              key={item.id}
              info={item}
              handleRemoveFromCart={handleRemoveFromCart}
              increment={increment}
              decrement={decrement}
            />
          ))}
      </div>
      <div className="totalArea">
        <h2>Total : </h2>
        <h2>${total.toFixed(2)}</h2>
      </div>
      <Link to="checkout">
        <button onClick={handleExitClick}>Proceed to Checkout</button>
      </Link>
    </div>
  );
}
export { Cart };
export default function CartWindow(props) {
  return (
    <div className="cartWindow">
      <div className="overlay" onClick={props.handleExitClick}></div>
      <Cart {...props} />
    </div>
  );
}
