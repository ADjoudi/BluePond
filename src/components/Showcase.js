import "../css/showcase.css";
import React from "react";
import back from "../assets/back.svg";
import placeholder from "../assets/placeholder.png";
import bookmark from "../assets/bookmark.svg";
import starFilled from "../assets/star-filled.svg";
import starHalfFilled from "../assets/star-half-filled.svg";
import starEmpty from "../assets/star-empty.svg";
import { Link } from "react-router-dom";

export default function Showcase(props) {
  let { productName, productImage } = props.item;
  return (
    <div className="showcase">
      <Link to="/">
        <div className="back">
          <img src={back} alt="<-" />
          <h3>Go Back</h3>
        </div>
      </Link>
      <div className="item">
        <img src={productImage} alt={"product"} id="productImageShowcase" />
        <div className="productInfo">
          <header>
            <h1>{productName}</h1>
            <img src={bookmark} alt="bookmark" />
          </header>
          <p className="description">
            Settle into a seat that loves you back and is designed to fit your
            body. A saucer chair designed in a gorgeous neutral black color that
            will suit any room décor. Featuring a silver sturdy metal frame to
            compliment its look. Add additional seating to living rooms,
            bedrooms, rec rooms or any room with this saucer chair. Designed in
            a simple bold color that will add a pop of color to any room you
            decide to put it in. Add a fun and cozy touch to any room you desire
            with this super soft faux fur saucer chair!
          </p>
          <div className="rating">
            <img src={starFilled} alt="star" />
            <img src={starFilled} alt="star" />
            <img src={starFilled} alt="star" />
            <img src={starHalfFilled} alt="star" />
            <img src={starEmpty} alt="star" />
          </div>
          <div className="action">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
