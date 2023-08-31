import logo from "../assets/logo.svg";
import "../styles/sidenav.scss";

function SideNav({ title = "", windowWidth }) {
  const arr = title.toUpperCase().split("");
  return windowWidth < 45.4375 ? (
    <div className="sidenav hide-sidenav"></div>
  ) : (
    <div className="sidenav">
      <div className="logo-container">
        <img src={logo} alt="BluePond" />
      </div>
      <div className="side-title">
        {arr.map((letter, index) => (
          <h1 key={index}>{letter}</h1>
        ))}
      </div>
    </div>
  );
}
export default SideNav;
