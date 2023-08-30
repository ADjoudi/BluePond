import exit from "../assets/exit.svg";
import "../styles/cart.scss";
import add from "../assets/add.svg";
import subtract from "../assets/subtract.svg";

function ItemCart({
  stylingClass,
  info,
  handleRemoveFromCart,
  increment,
  decrement,
  showCounter = true,
}) {
  let { id, productName, price, totalPrice, added } = info;
  return (
    <div className={stylingClass} id={id}>
      {stylingClass === "item-order-summary" && (
        <h2 className="nbr-orders">{added} | </h2>
      )}
      <h2 className="product-name-cart">{productName}</h2>
      <h2 className="price-cart">${price.toFixed(2)}</h2>
      {showCounter && (
        <>
          <div className="counter">
            {added <= 0 ? (
              <img src={exit} onClick={handleRemoveFromCart} id={id} />
            ) : (
              <img src={subtract} onClick={decrement} id={id} />
            )}
            <h2>{added}</h2>
            <img src={add} onClick={increment} id={id} />
          </div>
        </>
      )}
    </div>
  );
}
export default ItemCart;
