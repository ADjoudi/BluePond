import "../styles/Home.scss";
import Header from "./Header";
import SideNav from "./SideNav";

function Home() {
  return (
    <div className="page">
      <SideNav />
      <Header isShop={false} />
    </div>
  );
}
export default Home;
