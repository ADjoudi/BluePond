import "../styles/Home.scss";
import Header from "./Header";
import SideNav from "./SideNav";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const [width, setWidth] = useState(window.innerWidth / 16);

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
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth / 16);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="page">
      <SideNav windowWidth={width} title="home" />
      <Header windowWidth={width} isShop={false} />
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
