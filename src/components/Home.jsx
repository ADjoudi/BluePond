import "../styles/Home.scss";
import Header from "./Header";
import SideNav from "./SideNav";
import heroImage from "../assets/hero-image.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <SideNav title="home" />
      <Header isShop={false} />
      <div className="content-landing">
        <h1>
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
