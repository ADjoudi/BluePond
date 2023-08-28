import exit from "../assets/exit.svg";
import "../styles/cart.scss";
import add from "../assets/add.svg";
import subtract from "../assets/subtract.svg";

function ItemCart({ info, handleRemoveFromCart, increment, decrement }) {
  let { id, productName, price, totalPrice, added } = info;
  return (
    <div className="cartItem" id={id}>
      <h2 className="product-name-cart">{productName}</h2>
      <h2 className="price-cart">${price.toFixed(2)}</h2>
      <div className="counter">
        {added <= 0 ? (
          <img src={exit} onClick={handleRemoveFromCart} id={id} />
        ) : (
          <img src={subtract} onClick={decrement} id={id} />
        )}
        <h2>{added}</h2>
        <img src={add} onClick={increment} id={id} />
      </div>
    </div>
  );
}

export default function Cart({
  list = [],
  handleExitClick,
  handleRemoveFromCart,
  increment,
  decrement,
}) {
  const arr = Array.from(list);
  const total = arr.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <div className="cartWindow">
      <div className="overlay" onClick={handleExitClick}></div>
      <div className="cart">
        <header>
          <h1>CART</h1>
          <img src={exit} alt="exit" onClick={handleExitClick} />
        </header>
        <div className="listProducts">
          {arr[0] &&
            arr.map((item) => (
              <ItemCart
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
        <button onClick={handleExitClick}>Proceed to Checkout</button>
      </div>
    </div>
  );
}
