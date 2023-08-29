import "../styles/product.scss";
import back from "../assets/back.svg";
import placeholder from "../assets/placeholder.png";
import bookmark from "../assets/bookmark.svg";
import starFilled from "../assets/star-filled.svg";
import starHalfFilled from "../assets/star-half-filled.svg";
import starEmpty from "../assets/star-empty.svg";
import { Link, useParams, useOutletContext } from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const { info, handleAddToCart, handleRemoveFromCart } = useOutletContext();
  const { id, productName, productImage, description, price } = info.find(
    (item) => item.id === productId
  );
  return (
    <div className="showcase">
      <Link to="/shop">
        <div className="back">
          <img src={back} alt="<-" />
          <h3>Go Back</h3>
        </div>
      </Link>
      <div className="item">
        <img src={productImage} alt={"product"} id="productImageShowcase" />
        <div className="productInfo">
          <h1>{productName}</h1>

          <p className="description">{description}</p>
          <div className="space-between">
            <div className="rating">
              <img src={starFilled} alt="star" />
              <img src={starFilled} alt="star" />
              <img src={starFilled} alt="star" />
              <img src={starHalfFilled} alt="star" />
              <img src={starEmpty} alt="star" />
            </div>
            <h2>${price}</h2>
          </div>
          <div className="action">
            <button>Buy Now</button>
            <button onClick={handleAddToCart} id={id}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
