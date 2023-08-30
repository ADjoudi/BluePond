import "../styles/checkout.scss";
import { useOutletContext } from "react-router-dom";
import ItemCart from "./ItemCart";
import confetti from "canvas-confetti";

function Checkout() {
  const { cartList, handleRemoveFromCart, increment, decrement } =
    useOutletContext();

  return (
    <div className="checkout-page">
      <section className="cart-section">
        <h1>Selected Items</h1>
        {cartList.map((item) => (
          <ItemCart
            stylingClass="cart-item-section"
            key={item.id}
            info={item}
            handleRemoveFromCart={handleRemoveFromCart}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </section>
      <section className="order-summary">
        <h1>Order Summary</h1>
        {cartList.map((item) => (
          <ItemCart
            stylingClass="item-order-summary"
            key={item.id}
            info={item}
            handleRemoveFromCart={handleRemoveFromCart}
            increment={increment}
            decrement={decrement}
            showCounter={false}
          />
        ))}
        <div className="total-section">
          <h2>Total</h2>
          <h2>
            $
            {cartList
              .reduce((sum, item) => {
                return sum + item.price * item.added;
              }, 0)
              .toFixed(2)}
          </h2>
        </div>
        <button
          onClick={(e) => {
            const buttonRect = e.currentTarget.getBoundingClientRect();
            const cx =
              (buttonRect.left + buttonRect.right) / 2 / window.innerWidth; // X coordinate
            const cy =
              (buttonRect.top + buttonRect.bottom) / 2 / window.innerHeight; // Y coordinate

            confetti({
              particleCount: 150,
              spread: 60,
              origin: { x: cx, y: cy },
            });
          }}
        >
          Place Order
        </button>
      </section>
    </div>
  );
}
export default Checkout;
