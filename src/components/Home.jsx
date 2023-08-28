import "../styles/Home.scss";
import Header from "./Header";
import SideNav from "./SideNav";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .getElementsByClassName("hero-title")[0]
        .classList.remove("hero-title-load");
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="page">
      <SideNav title="home" />
      <Header isShop={false} />
      <div className="content-landing">
        <h1 className={"hero-title" + " " + "hero-title-load"}>
          Elevate Your Lifestyle{"\n"}
          With Luxury
        </h1>
        <h2>
          Discover a curated collection of high-end fashion and accessories that
          epitomize{"\n"}
          elegance and exclusivity. Indulge in craftsmanship that embodies
          sophistication{"\n"}
          Elevate your style with our exquisite offerings
        </h2>
        <Link className="link" to="/shop">
          View Collection
        </Link>
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}
export default Home;
